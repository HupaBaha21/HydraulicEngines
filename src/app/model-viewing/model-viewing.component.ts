import { DetailsService } from './../services/details/details.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../services/model/model.service';
import { ModelConfig } from '../info';
import { Details } from '../info';
import { details } from '../info';

@Component({
  selector: 'app-model-viewing',
  templateUrl: './model-viewing.component.html',
  styleUrls: ['./model-viewing.component.css']
})
export class ModelViewingComponent implements OnInit {
  isLoaded: boolean = false;
  listState: string = 'hidden';
  partList: { [partName: string]: string; } = {};
  details: Details;
  @Input() currentMachine: string = '';
  @Input() config: ModelConfig = {
    distanceFromModel: 15,
    modelPath: 'assets/TTU.glb',
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  constructor(private modelService: ModelService, private detailsService: DetailsService) {
    this.details = {
      title: "",
      text: ""
    };
  }

  ngOnInit(): void {
    const canvas = <HTMLCanvasElement>document.querySelector('#view');

    this.modelService.setHdrEnvironment('assets/light1.hdr');
    const isLoaded = this.modelService.createModelView(canvas, this.config);
    this.modelService.partSelect.subscribe(part =>
      this.details = this.detailsService.retrieveDetails(part.name, this.currentMachine)
    );

    isLoaded.subscribe(isDone => this.isLoaded = isDone);

    this.partList = details[this.currentMachine];

    document.addEventListener("animationend", ()=> {
      this.listState = this.listState === 'inactive' ? 'hidden' : 'active';
      console.log(this.listState);
    });
  }

  zoom(num: number) {
    this.modelService.zoom(num);
  }

  lookAtListObject(name: string) {
    this.modelService.lookAtListObject(name);
    this.listState = 'inactive';
  }
}
