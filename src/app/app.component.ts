import { introPageInfo, machines } from './info';
import { Component } from '@angular/core';
import { ModelConfig } from './info';
// import { HttpClient } from '@angular/common/http';

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
    distanceFromModel: 20,
    modelPath: `https://baha21storage.blob.core.windows.net/oldersystem/${machines[0]}.glb`,
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  // constructor(private http: HttpClient) { }

  // loadModelFromWebsite() {
  //   const modelURL = this.config.modelPath;

  //   this.http.get(modelURL).subscribe(
  //     (modelData) => {
  //       // Process the loaded model data
  //       console.log('Model loaded successfully:', modelData);

  //       // Perform any additional operations with the loaded model
  //     },
  //     (error) => {
  //       console.error('Failed to load the model:', error);
  //       // Handle the error appropriately
  //     }
  //   );
  // }

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
          this.config.modelPath = `https://baha21storage.blob.core.windows.net/oldersystem/${this.currentMachine}.glb`;
          // this.loadModelFromWebsite();
        }

        // end animation (turn opacity to 100%) after all the elements have been added to the dom
        setTimeout(() => {
          this.opacity = false;
        }, 1500);

      }, 500);
    }
  }
}
