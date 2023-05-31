import { EventEmitter, Injectable } from '@angular/core';
import { ACESFilmicToneMapping, EquirectangularReflectionMapping, Object3D, PerspectiveCamera, Raycaster, Scene, sRGBEncoding, TextureLoader, Vector2, WebGLRenderer, Vector3, Mesh } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ModelConfig, details } from '../../info';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModelService {
  public partSelect: EventEmitter<Object3D>;
  public disableRaycasting: boolean;

  private modelLoader : GLTFLoader;
  private rgbeLoader : RGBELoader;
  private textureLoader : TextureLoader;

  private scene : Scene;
  private camera : PerspectiveCamera;
  private raycaster : Raycaster;

  private controls? : OrbitControls;
  private composer? : EffectComposer;
  private model? : Object3D;
  public parts : Object3D[];
  // private outerParts: {[itemName: string]: string; };

  outlinePass?: OutlinePass;

  selectedListObject?: Object3D;

  renderer: WebGLRenderer = new WebGLRenderer();

  constructor() {
    this.partSelect = new EventEmitter<Object3D>();
    this.disableRaycasting = false;

    this.modelLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.textureLoader = new TextureLoader();

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 70);
    this.raycaster = new Raycaster();

    this.parts = [];
    // this.outerParts = {};
  }

  public zoom(indicator: number) {
    if (this.camera.zoom + indicator > this.controls!.minZoom && this.camera.zoom + indicator <= this.controls!.maxZoom) {
      this.camera.zoom += indicator;
      this.camera.updateProjectionMatrix();
    }
  }

  public createModelView(canvas: HTMLCanvasElement, config: ModelConfig): Observable<boolean> {
    let isLoaded = new BehaviorSubject<boolean>(false);

    this.initScene(config);

    // this.outerParts = details[machine].outerParts;

    const renderer = this.setupRenderer(canvas, config);
    this.renderer = renderer;
    this.outlinePass = this.setupOutlinePass(config);

    this.composer = this.setupComposer(renderer, this.outlinePass);
    this.controls = this.setupControls(canvas);

    this.loadModel(config, isLoaded);
    this.setupDomEvents();

    return isLoaded;
  }

  private initScene(config: ModelConfig) {
    this.scene.clear();
    this.camera.position.setZ(config.distanceFromModel);
    this.camera.zoom = 1;
    this.camera.updateProjectionMatrix();
  }

  private setupRenderer(canvas: HTMLCanvasElement, config: ModelConfig) : WebGLRenderer {
    const renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true
    });
    renderer.setPixelRatio(2);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    renderer.setSize(vw, vh);
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2; // for outline

    return renderer;
  }

  private setupControls(canvas: HTMLCanvasElement): OrbitControls {
    const controls = new OrbitControls(this.camera, canvas);
    controls.maxDistance = 30;
    controls.minDistance = 6.2;
    controls.panSpeed = 0.4;

    //Only as variables usage, arent really enforced by the controls (Bc its a prerspective camera)
    controls.maxZoom = 2;
    controls.minZoom = 0.5;

    controls.update();
    
    return controls;
  }

  private setupOutlinePass(config: ModelConfig): OutlinePass {
    const outlinePass = new OutlinePass( new Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
    outlinePass.visibleEdgeColor.setHex(config.edgeColor ?? 0xFF0000);
    outlinePass.edgeStrength = 5;

    return outlinePass;
  }

  private setupComposer(renderer: WebGLRenderer, outlinePass: OutlinePass): EffectComposer {
    const composer = new EffectComposer(renderer);
    const pass = new RenderPass(this.scene, this.camera);
    composer.addPass(pass);
    composer.addPass(outlinePass);

    return composer;
  }

  private loadModel(config: ModelConfig, isLoaded: BehaviorSubject<boolean>) {
    this.modelLoader.load(config.modelPath,
    gltf =>  this.onModelLoad(gltf, config, isLoaded),
      config.onModelLoadProgress,
      config.onModelLoadError
    );
  }

  private onModelLoad(gltf: GLTF, config: ModelConfig, isLoaded: BehaviorSubject<boolean>) {
    this.model = gltf.scene;
    this.model.position.setY(-config.modelHeight);

    this.scene.add(this.model);
    this.animate();
    this.parts = this.extractChildren(this.model);

    isLoaded.next(true);
    isLoaded.complete();

    //Set all of the objects parts as transparent so that they could have their opacity changed later.
    this.parts.forEach(part => {
      if(part instanceof Mesh){
        part.material.transparent = true;
      }
    });
  }

  private extractChildren(model : Object3D) : Object3D[] {
    let children : Object3D[] = [];

    model.children.forEach(child => {
      if (child.children.length) {
        children = children.concat(this.extractChildren(child));
      } else {
        children.push(child);
      }
    });

    return children;
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.controls?.update();
    this.composer?.render();
  }

  private setupDomEvents() {
    document.getElementById("view")?.addEventListener('mousemove', event => this.onDocumentMouseHover(event), false);
    document.getElementById("view")?.addEventListener('mousedown', event => this.onDocumentMouseDown(event), false);
    window.addEventListener("resize", () => {
      this.updateRendererSize();
    });
  }

  private updateRendererSize(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      this.camera.aspect = vw/vh;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(vw, vh);
  }

  private onDocumentMouseDown(event: any) {
    this.controls!.target = new Vector3(0,0,0);


    console.log(this.outlinePass!.selectedObjects.length && !event.button);
    console.log(this.selectedListObject !== undefined);


    //Understand logic here
    //if a part has been selected from model and not from list
    if (this.outlinePass!.selectedObjects.length && !event.button) {
      this.partSelect.emit(this.outlinePass!.selectedObjects[0]);
    }

    //if a part has been selected from list and now the user just wants out of that
    if(this.selectedListObject !== undefined){
      this.parts.forEach(part => {
        if(part instanceof Mesh){
          part.material.opacity = 1.0;
        }
      });
    }
  }

  public lookAtListObject(name: string){
    //if there is 
    if (this.findPartByName(name) !== false) {
      this.selectedListObject = this.findPartByName(name);
      this.outlinePass!.selectedObjects = [this.selectedListObject!];
      this.partSelect.emit(this.outlinePass!.selectedObjects[0]);
      this.controls!.target = this.selectedListObject!.position;
  
      this.parts.forEach(part => {
        if(part instanceof Mesh){
            part.material.opacity = 0.3;
        }
      });
  
      if(this.selectedListObject instanceof Mesh){
        this.selectedListObject.material.opacity = 1.0;
      }
      
    }
  }

  // private searchForOuterObject(name: string){
  //   for (const key in this.outerParts) {
  //     if (key === name) {
  //       return this.outerParts[key];
  //     }
  //   }
  //   return null;
  // }

  private findPartByName(name: string): any {
    for (let i = 0; i < this.parts.length; i++) {
      if(this.parts[i].name === name) {
        return this.parts[i];
      }
    };

    return false;
  }

  private onDocumentMouseHover(event: any) {
    if (!this.model || !this.parts || this.disableRaycasting) {
      if (this.disableRaycasting) {
        this.outlinePass!.selectedObjects = [];
      }

      return;
    }

    event.preventDefault();
    const mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
    const mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
    const vec:Vector2= new Vector2(mouseX,mouseY)
    this.raycaster.setFromCamera(vec, this.camera);

    const intersects = this.raycaster.intersectObjects( this.parts );

    if ( intersects.length > 0 ) {
      const topObj = intersects[0].object;

      if (topObj.parent !== this.model) {
        this.outlinePass!.selectedObjects = [topObj.parent ?? topObj];
      } else {
        this.outlinePass!.selectedObjects = [topObj];
      }
    } else {
      this.outlinePass!.selectedObjects = [];
    }
  }

  public setHdrEnvironment(path: string) {
    this.rgbeLoader.load(path, texture => {
      texture.mapping = EquirectangularReflectionMapping;
      this.scene.environment = texture;
      texture.dispose();
    });
  }

  public setHdrBackground(path: string) {
    this.rgbeLoader.load(path, texture => {
      texture.mapping = EquirectangularReflectionMapping;
      this.scene.background = texture;
      texture.dispose();
   });
  }

  public setLdrEnvironment(path: string) {
    this.textureLoader.load(path, texture => {
      texture.mapping = EquirectangularReflectionMapping;
      this.scene.environment = texture;
      texture.dispose();
    });
  }

  public setLdrBackground(path: string) {
    this.textureLoader.load(path, texture => {
      texture.mapping = EquirectangularReflectionMapping;
      this.scene.background = texture;
      texture.dispose();
    });
  }
}
