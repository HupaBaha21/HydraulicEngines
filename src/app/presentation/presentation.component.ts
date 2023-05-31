import { Component, OnInit, Input } from '@angular/core';
import { presentations } from '../info';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  activeMessage: boolean = true;
  waitingTime: number = 3000;
  @Input() currentMachine: string = '';
  presentations = presentations;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.activeMessage = false;
    }, this.waitingTime);
  }

  // sanitizeUrl(url: string): SafeUrl {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
}
