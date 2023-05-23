import { introPageInfo, machines } from './info';
import { Component } from '@angular/core';
import { ModelConfig } from './info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  introPageInfo = introPageInfo;
  learningMode: string = 'הכרה';
  currentMachine: string = '';
  machines = machines;
  learningModes = [
    {
      name: "תפעול",
      src: "../assets/imgs/presentation.png"
    },
    {
      name: "הכרה",
      src: "../assets/imgs/view.png"
    }
  ];

  public config: ModelConfig = {
    distanceFromModel: 15,
    modelPath: 'assets/TTU.glb',
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  changeMachine(machine: string) {
    this.currentMachine = machine;
    this.config.modelPath = `assets/${this.currentMachine}.glb`;
  }
}
