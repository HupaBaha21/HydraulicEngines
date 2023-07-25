  import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    @Input() isVisible = true;
    @Input() isVisited = false;
    @Input() details: Details = {
      title: 'title',
      text: 'text'
    };

    constructor(modelService: ModelService) {
      this.modelService = modelService;
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.isVisible = true;
    }

    getTypeOfDetails() {
      console.log(typeof this.details);
      return typeof this.details;
    }

    typeof(v: any) {
      console.log(typeof v);
      return typeof v;
    }
}
