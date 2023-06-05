import { Component, OnInit, Input } from '@angular/core';
import { presentationPage, presentations } from '../info';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  psId: string = "21944&amp;authkey=%21AK3RlJb_ZmIVfsY&amp;em=2&amp;wdAr=1.3333333333333333";
  safe: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const presentationId = "21944&amp;authkey=%21AK3RlJb_ZmIVfsY&amp;em=2&amp;wdAr=1.3333333333333333";
    const url = `https://onedrive.live.com/embed?resid=41F21928ABD61941%${presentationId}`;
    console.log(url);
    this.safe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
    setTimeout(() => {
      this.activeMessage = false;
    }, this.waitingTime);
  }


  getSafeUrl(): SafeResourceUrl {
    const presentationId = "21944&amp;authkey=%21AK3RlJb_ZmIVfsY&amp;em=2&amp;wdAr=1.3333333333333333";
    const url = `https://onedrive.live.com/embed?resid=41F21928ABD61941%${presentationId}`;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // sanitizeUrl(url: string): SafeUrl {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
}
