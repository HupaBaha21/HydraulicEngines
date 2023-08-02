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
  animationened: boolean = true;
  animationTime: number = 1.5;

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
    this.animationened = false;
    setTimeout(() => {
      this.animationened = true;
    }, this.animationTime * 1000);

    this.turn = (this.turn === 'Machine') ? 'Intro' : 'Machine';
    this.learningMode = introPageInfo.learningModes[0];
    this.currentMachine = machine;
    if (machine !== '') {
      this.config.modelPath = `assets/TTU.glb`;
    }
  }
}
