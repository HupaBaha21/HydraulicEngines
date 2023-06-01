  import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
  import { Details } from '../info';
  import { ModelService } from '../services/model/model.service';

  @Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
  })
  export class DetailsComponent implements OnChanges {
    modelService: ModelService;
    @Input() isVisible = true;

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
}
