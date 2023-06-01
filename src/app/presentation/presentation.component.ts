import { Component, OnInit, Input } from '@angular/core';
import { presentationPage, presentations } from '../info';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // document.getElementById("iframe")?.setAttribute("src", this.presentations[this.currentMachine]);
    // console.log(document.getElementById("iframe")?.getAttribute("src"));
    
    
    setTimeout(() => {
      this.activeMessage = false;
      // var iframe = document.createElement('iframe');
      // iframe.onload = function() { alert('myframe is loaded'); }; // before setting 'src'
      // iframe.classList.add("screen");
      // console.log(iframe.src);
      setTimeout(() => {
        document.getElementById("iframe")?.setAttribute("src",this.presentations[this.currentMachine]) ;
        // document.getElementById("iframe")?.appendChild(iframe);
      }, 2000);
    }, this.waitingTime);
  }

  // sanitizeUrl(url: string): SafeUrl {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
}
