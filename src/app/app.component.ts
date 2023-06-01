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
  machines = machines;
  learningModes = introPageInfo.learningModes;
  learningMode: string = introPageInfo.learningModes[0];
  
  currentMachine: string = '';
  turn: string = '';
  opacity: boolean = false;

  public config: ModelConfig = {
    distanceFromModel: 15,
    modelPath: 'assets/TTU.glb',
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  changeMachine(machine: string) {
    if (!this.opacity) {
      this.learningMode = introPageInfo.learningModes[0];
      this.turn = (this.turn === 'Machine') ? 'Intro' : 'Machine';
      this.opacity = true;
  
      setTimeout(() => {
        this.currentMachine = machine;
        if (machine !== '') {
          this.config.modelPath = `assets/${this.currentMachine}.glb`;
        }
        
        setTimeout(() => {
          this.opacity = false;
        }, 1500);
        
      }, 500);
    }
  }
}
