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
  searchText: string = "";
  easterArr: string[] = [
    "כיכר הכדורים לוד",
    "שמעת על ניהול ידע?",
    "איתי גולדדצמן",
    "דניאלה המדרובה",
    "אין מלחמה בבה סינג סה",
  ];

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
    this.modelService.partSelect.subscribe((part) =>
      this.details = this.detailsService.retrieveDetails(part.name, this.currentMachine)
    );

    isLoaded.subscribe(isDone => this.isLoaded = isDone);

    this.innerPartsList = details[this.currentMachine].parts;
    this.outerPartsList = details[this.currentMachine].outerParts;

    document.getElementById("list")?.addEventListener("animationend", ()=> {
      this.listState = (this.listState === this.states.inactive) ? this.states.hidden : this.states.active;
    });
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
      this.config!.modelPath = `https://baha21storage.blob.core.windows.net/oldersystem/${this.currentMachine}${this.modelState}.glb`;

      const isLoaded = this.modelService.reloadModel(this.config!);

      isLoaded.subscribe(isDone => {
        if(isLoaded){
          this.isLoaded = isDone;
          this.modelService.lookAtListObject(name);
          this.listState = this.states.inactive;
        }
      });
    }

    else {
      this.modelService.lookAtListObject(name);
      this.listState = this.states.inactive;
    }
  }
}
