import { DetailsService } from './../services/details/details.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../services/model/model.service';
import { ModelConfig, Details, details, modelPage } from '../info';

@Component({
  selector: 'app-model-viewing',
  templateUrl: './model-viewing.component.html',
  styleUrls: ['./model-viewing.component.css']
})
export class ModelViewingComponent implements OnInit {
  listState: string = modelPage.states.hidden;
  states = modelPage.states;
  modelState: string = "";

  isLoaded: boolean = false;
  innerPartsList: { [partName: string]: string; } = {};
  outerPartsList: { [partName: string]: string; } = {};
  details: Details;
  modelPage = modelPage;
  static isVisited: boolean = false;
  @Input() currentMachine: string = '';
  @Input() config?: ModelConfig;

  constructor(private modelService: ModelService, private detailsService: DetailsService) {
    if (!ModelViewingComponent.isVisited) {
      this.details = {
        title: this.modelPage.explanationTitle,
        text: this.modelPage.explanationText
      };
      ModelViewingComponent.isVisited = true;
    } else {
      this.details = {
        title: "",
        text: ""
      };
    }
  }

  ngOnInit(): void {
    const canvas = <HTMLCanvasElement>document.querySelector('#view');
    this.modelService.setHdrEnvironment('https://baha21storage.blob.core.windows.net/oldersystem/light1.hdr');
    const isLoaded = this.modelService.createModelView(canvas, this.config!);
    this.modelService.partSelect.subscribe(part =>
      this.details = this.detailsService.retrieveDetails(part.name, this.currentMachine)
    );

    isLoaded.subscribe(isDone => this.isLoaded = isDone);

    this.innerPartsList = details[this.currentMachine].parts;
    this.outerPartsList = details[this.currentMachine].outerParts;

    document.getElementById("list")?.addEventListener("animationend", ()=> {
      this.listState = (this.listState === this.states.inactive) ? this.states.hidden : this.states.active;
    });
  }

  zoom(indicator: number) {
    this.modelService.zoom(indicator);
  }

  toggleList() {
    this.listState = (this.listState !== this.states.active) ? this.states.active : this.states.inactive;
  }

  get configValue() {
    return this.config;
  }

  openListObject(name: string, indication: string) {
    this.modelService.lookAtListObject(name);
    this.listState = this.states.inactive;
    
    if (indication !== this.modelState) {
      this.modelState = indication;
      this.config!.modelPath = `https://baha21storage.blob.core.windows.net/oldersystem/${this.currentMachine}${this.modelState}.glb`;
      const canvas = <HTMLCanvasElement>document.querySelector('#view');
      this.modelService.setHdrEnvironment('https://baha21storage.blob.core.windows.net/oldersystem/light1.hdr');
      const isLoaded = this.modelService.createModelView(canvas, this.config!);
      this.modelService.partSelect.subscribe(part =>
        this.details = this.detailsService.retrieveDetails(part.name, this.currentMachine)
      );

      isLoaded.subscribe(isDone => this.isLoaded = isDone);
    }

  }
}
