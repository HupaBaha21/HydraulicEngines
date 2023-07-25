  import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
  import { ModelService } from '../services/model/model.service';
  import { modelPage, Details, imgs } from '../info';

  @Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
  })
  export class DetailsComponent implements OnChanges {
    modelPage = modelPage;
    imgs = imgs;

    modelService: ModelService;
    static isVisited: boolean = false;
    @Input() isVisible = true;
    @Input() details: Details = {
      title: 'title',
      text: 'text'
    };

    constructor(modelService: ModelService) {
      this.modelService = modelService;
    }

    ngOnDestroy() {
      if (!DetailsComponent.isVisited) {
        DetailsComponent.isVisited = true;
      }
    }

    get isVisited() {
      return DetailsComponent.isVisited;
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.isVisible = true;
    }
}
