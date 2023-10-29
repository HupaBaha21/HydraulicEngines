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
  message: string = '';

  url: string = 'https://baha21storage.blob.core.windows.net/oldersystem/';
  currentMachine: string = '';

  public config: ModelConfig = {
    distanceFromModel: 20,
    modelPath: this.url + `${machines[0]}.glb`,
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      (response) => {
        if (response != null && response.account != null) {
          this.user = response.account!;
          this.msalService.instance.setActiveAccount(response.account);

          const jsonAcc = JSON.stringify(response.account);
          sessionStorage.setItem('account', jsonAcc);
        }
      },
      (error: any) => {
      }
    );
    this.setGreeting();
    // let account = JSON.parse(sessionStorage.getItem('account')!);
    // if (account) {
    //   this.msalService.instance.setActiveAccount(account);
    //   this.user = account;
    // }
  }

  setGreeting() {
    var hours = new Date().getHours() / 6;
    this.message = introPageInfo.greetings[Math.floor(hours)];
  }

  setUserInfo(){
    this.user = this.msalService.instance.getActiveAccount()!;
    const jsonAcc = JSON.stringify(this.user);
    sessionStorage.setItem('account', jsonAcc);
  }

  loginRedirect() {
    this.msalService.loginRedirect();
  }

  continueToPage() {
    document.getElementById('idf-login')!.classList.add("after-enter-disappear");
    document.getElementById("bottom-container")?.classList.add("after-enter-bottom-animation");

    document.getElementById('bottom-container')?.addEventListener("animationend", () => {
      document.getElementById('bottom-container')?.classList.remove("after-enter-bottom-animation");
      document.getElementById("bottom-container")!.style.height = "63vh";
      document.getElementById("bottom-container")!.style.borderRadius = "35px 35px 0px 0px";
    })

    setTimeout(() => {
      document.getElementById('idf-login')?.remove();
      document.getElementById('bottom-content')!.style.display = "block";

      setTimeout(() => {
        document.getElementById("bottom-container")!.style.height = "63vh";
        // document.getElementById("bottom-container")?.classList.remove("after-enter-bottom-animation");
      }, 1000);
    }, 1500);
  }

  introMode() {
    this.currentMachine = "";

    document.getElementById("top-container")!.style.height = "37vh";
    document.getElementById("bottom-container")!.style.height = "63vh";
  }

  machineMode(machine: string) {
    this.learningMode = introPageInfo.learningModes[0];
    this.currentMachine = machine;
    this.config.modelPath = this.url + `${this.currentMachine}.glb`;

    document.getElementById("top-container")!.style.height = "26vh";
    document.getElementById("bottom-container")!.style.height = "74vh";
  }

  changeHeight() {
    console.log("dsaasdgjsa");
    console.log(document.getElementById("bottom-container"));
    // document.getElementById("bottom-container")!.style.height = "63vh";
    document.getElementById("bottom-container")!.style.height = "";
    document.getElementById("bottom-container")!.style.height = "100px";

  }
}
