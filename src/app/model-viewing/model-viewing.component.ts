import { CacheService } from './../services/cache/cache.service';
import { DetailsService } from './../services/details/details.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../services/model/model.service';
import { ModelConfig, Details, details, imgs, modelPage } from '../info';


@Component({
  selector: 'app-model-viewing',
  templateUrl: './model-viewing.component.html',
  styleUrls: ['./model-viewing.component.css']
})
export class ModelViewingComponent implements OnInit {
  modelPage = modelPage;
  listState: string = modelPage.states.hidden;
  states = modelPage.states;
  details: Details;
  imgs = imgs;

  modelState: string = "";
  searchText: string = "";
  easterArr: string[] = [
    "כיכר הכדורים לוד",
    "שמעת על ניהול ידע?",
    "איתי גולדדצמן",
    "דניאלה המדרובה",
    "אין מלחמה בבה סינג סה",
  ];

  isLoaded: boolean = false;
  url: string = 'https://baha21storage.blob.core.windows.net/oldersystem/';
  innerPartsList: { [partName: string]: string; } = {};
  outerPartsList: { [partName: string]: string; } = {};
  @Input() currentMachine: string = '';
  @Input() config?: ModelConfig;

  constructor(private modelService: ModelService, private detailsService: DetailsService, private cacheService : CacheService) {
    this.details = {
      title: "",
      text: ""
    }
  }

  async ngOnInit() {
    const canvas = <HTMLCanvasElement>document.querySelector('#view');
    this.modelService.setHdrEnvironment(this.url + 'light.hdr');
    const isLoaded = this.modelService.createModelView(canvas, this.config!);
    this.modelService.partSelect.subscribe((part) =>
      this.details = this.detailsService.retrieveDetails(part.name, this.currentMachine)
    );

    isLoaded.subscribe(isDone => this.isLoaded = isDone);

    this.innerPartsList = details[this.currentMachine].parts;
    this.outerPartsList = details[this.currentMachine].outerParts;

    document.getElementById("list")?.addEventListener("animationend", ()=>
      this.listState = (this.listState === this.states.inactive) ? this.states.hidden : this.states.active
    );

    this.cacheService.handleCache(this.cacheName, this.cacheUrl);
  }

  get cacheName(): string {
    return this.currentMachine + this.modelState;
  }

  get cacheUrl(): string {
    return this.url + this.currentMachine + this.modelState + `.glb`;
  }

  toggleList() {
    this.listState = (this.listState !== this.states.active) ? this.states.active : this.states.inactive;
  }

  resetView() {
    this.modelService.resetView();
  }

  openListObject(name: string, indication: string) {
    if (indication !== this.modelState) {
      this.isLoaded = false;
      this.modelState = indication;
      this.config!.modelPath = this.url + `${this.currentMachine}${this.modelState}.glb`;
      this.cacheService.handleCache(this.cacheName, this.cacheUrl);

      const isLoaded = this.modelService.reloadModel(this.config!);

      isLoaded.subscribe(isDone => {
        if(isLoaded){
          this.isLoaded = isDone;
          this.modelService.lookAtListObject(name);
        }
      });
    } else {
      this.modelService.lookAtListObject(name);
    }
    this.listState = this.states.inactive;
  }
}
