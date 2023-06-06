import { Component, OnInit, Input } from '@angular/core';
import { presentationPage } from '../info';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  @Input() currentMachine: string = '';
  presentationPage = presentationPage;
  static isVisited: boolean = false;

  ngOnInit(): void {
    if (!PresentationComponent.isVisited) {
      setTimeout(() => {
        PresentationComponent.isVisited = true;
      }, presentationPage.waitingTime);
    }
  }

  
  public get isVisited() : boolean {
    return PresentationComponent.isVisited;
  }
  
}
