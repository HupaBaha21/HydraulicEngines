import { introPageInfo, machines } from './info';
import { Component } from '@angular/core';
import { ModelConfig } from './info';
import { AccountInfo } from '@azure/msal-browser';

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
  user!: AccountInfo;

  currentMachine: string = '';
  turn: string = '';
  opacity: boolean = false;

  public config: ModelConfig = {
    distanceFromModel: 20,
    // modelPath: `https://baha21storage.blob.core.windows.net/oldersystem/${machines[0]}.glb`,
    modelPath: `assets/TTU.glb`,
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  setUser(user: AccountInfo) {
    this.user = user;
  }

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
          this.config.modelPath = `assets/TTU.glb`;
        }

        // end animation (turn opacity to 100%) after all the elements have been added to the dom
        setTimeout(() => {
          this.opacity = false;
        }, 1500);

      }, 500);
    }
  }
}
