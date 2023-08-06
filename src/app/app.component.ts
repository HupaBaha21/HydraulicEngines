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
  learningModes = introPageInfo.learningModes;
  learningMode: string = introPageInfo.learningModes[0];
  user!: AccountInfo;
  trigger: boolean = false;
  message: string = '';

  currentMachine: string = '';
  turn: string = '';
  animationened: boolean = true;
  animationTime: number = 1.5;

  public config: ModelConfig = {
    distanceFromModel: 20,
    modelPath: `https://baha21storage.blob.core.windows.net/oldersystem/${machines[0]}.glb`,
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
    var hours = new Date().getHours();
    var morning = 'בוקר טוב';
    var afternoon = 'צהריים טובים';
    var evening = 'ערב טוב';

    if (hours >= 0 && hours < 12) {
      this.message = morning;
    } else if (hours >= 12 && hours < 17) {
      this.message = afternoon;
    } else if (hours >= 17 && hours < 24) {
      this.message = evening;
    }
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

        const jsonAcc = JSON.stringify(response.account);
        sessionStorage.setItem('account', jsonAcc);
      },
      (error: any) => console.log(error),
      () => console.log("complete")
    );
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
      this.config.modelPath = `https://baha21storage.blob.core.windows.net/oldersystem/${this.currentMachine}.glb`;
    }
  }
}
