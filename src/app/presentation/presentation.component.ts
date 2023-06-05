import { Component, OnInit, Input } from '@angular/core';
import { presentationPage, presentations } from '../info';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  activeMessage: boolean = true;
  waitingTime: number = 1000;
  @Input() currentMachine: string = '';
  presentations = presentations;
  presentationPage = presentationPage;

  ngOnInit(): void {
    
    
    setTimeout(() => {
      this.activeMessage = false;
    }, this.waitingTime);
  }

  // sanitizeUrl(url: string): SafeUrl {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
}
