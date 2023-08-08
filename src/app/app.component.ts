import { introPageInfo, machines } from './info';
import { Component, OnInit } from '@angular/core';
import { ModelConfig } from './info';
import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  introPageInfo = introPageInfo;
  machines = machines;
  learningMode: string = introPageInfo.learningModes[0];
  user!: AccountInfo;
  trigger: boolean = false;
  message: string = '';

  url: string = 'https://baha21storage.blob.core.windows.net/oldersystem/';
  currentMachine: string = '';
  turn: string = '';
  animationened: boolean = true;

  public config: ModelConfig = {
    distanceFromModel: 20,
    modelPath: this.url + `${machines[0]}.glb`,
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    this.setGreeting();
    let account = JSON.parse(sessionStorage.getItem('account')!);
    if (account) {
      this.msalService.instance.setActiveAccount(account);
      this.trigger = true;
      this.user = account;
    } else {
      this.logIn();
    }
  }

  setGreeting() {
    var hours = new Date().getHours() / 6;
    this.message = introPageInfo.greetings[Math.floor(hours)];
  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  logIn() {
    this.msalService.loginPopup().subscribe(
      (response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);
        this.trigger = true;
        this.user = response.account!;
        this.message += 'response';


        const jsonAcc = JSON.stringify(response.account);
        sessionStorage.setItem('account', jsonAcc);
      },
      (error: any) => this.message += error,
      () => this.message += 'completed'
    );
  }

  changeMachine(machine: string) {
    var animationTime: number = 1.5;

    this.animationened = false;
    setTimeout(() => {
      this.animationened = true;
    }, animationTime * 1000);

    this.turn = (this.turn === 'Machine') ? 'Intro' : 'Machine';
    this.learningMode = introPageInfo.learningModes[0];
    this.currentMachine = machine;
    if (machine !== '') {
      this.config.modelPath = this.url + `${this.currentMachine}.glb`;
    }
  }
}
