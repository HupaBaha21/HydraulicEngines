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
    modelPath: 'assets/' + machines[0] + '.glb',
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  changeMachine(machine: string) {
    // if the past animation is done = if opacity is false
    // so that the user wouldnt be able to switch pages before the animation is done
    if (!this.opacity) {
      this.turn = (this.turn === 'Machine') ? 'Intro' : 'Machine';
      this.opacity = true;
      
      // wait before adding elements to the dom, wait for the opacity to be 0% in the animation
      setTimeout(() => {
        this.learningMode = introPageInfo.learningModes[0];
        this.currentMachine = machine;
        if (machine !== '') {
          this.config.modelPath = `assets/${this.currentMachine}.glb`;
        }
        
        // end animation (turn opacity to 100%) after all the elements have been added to the dom
        setTimeout(() => {
          this.opacity = false;
        }, 1500);
        
      }, 500);
    }
  }
}
