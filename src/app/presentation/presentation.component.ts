import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  activeMessage: boolean = true;
  waitingTime: number = 3000;

  ngOnInit(): void {
    setTimeout(() => {
      this.activeMessage = false;
    }, this.waitingTime);
  }
}
