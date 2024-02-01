  import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
  import { ModelService } from '../services/model/model.service';
  import { modelPage, Details, imgs } from '../info';

  @Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
  })
  export class DetailsComponent implements OnChanges, OnDestroy {
    modelPage = modelPage;
    imgs = imgs;
    static isVisited: boolean = false;
    isClosed: boolean = true;
    modelService: ModelService;
    @Input() details: Details = {
      title: 'title',
      text: 'text'
    };

    constructor(modelService: ModelService) {
      this.modelService = modelService;
      this.isClosed = DetailsComponent.isVisited;
    }

    ngOnDestroy() {
      DetailsComponent.isVisited = true;
    }

    getIsVisited() {
      return DetailsComponent.isVisited;
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.isClosed = false;
    }

    endExplanation() {
      this.isClosed = true;
      DetailsComponent.isVisited = true;
      this.modelService.disableRaycasting = false
    }
}
