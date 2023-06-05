import { Component, OnInit, Input } from '@angular/core';
import { presentationPage } from '../info';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  activeMessage: boolean = true;
  @Input() currentMachine: string = '';
  presentationPage = presentationPage;

  ngOnInit(): void {
    setTimeout(() => {
      this.activeMessage = false;
    }, presentationPage.waitingTime);
  }
}
