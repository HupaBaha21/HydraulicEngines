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

  elBottomContainer: any;

  public config: ModelConfig = {
    distanceFromModel: 20,
    modelPath: this.url + `${machines[0]}.glb`,
    modelHeight: 1.5,
    onModelLoadProgress: (xhr) => { },
    onModelLoadError: console.error
  };

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    this.elBottomContainer = document.getElementById("bottom-container");
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
    this.elBottomContainer.classList.add("after-enter-bottom-animation");

    this.elBottomContainer.addEventListener("animationend", () => {
      this.elBottomContainer.classList.remove("after-enter-bottom-animation");
      this.elBottomContainer.style.height = "63vh";
      this.elBottomContainer.style.borderRadius = "35px 35px 0px 0px";
      document.getElementById("top-container")!.style.zIndex = "10";
      document.getElementById("bottom-content")!.style.display = "block";
      document.getElementById('idf-login')?.remove();
    }, {once : true});
  }

  introMode() {
    this.currentMachine = "";

    document.getElementById("top-container")!.style.height = "37vh";
    this.elBottomContainer.style.height = "63vh";
  }

  machineMode(machine: string) {
    this.learningMode = introPageInfo.learningModes[0];
    this.currentMachine = machine;
    this.config.modelPath = this.url + `${this.currentMachine}.glb`;

    document.getElementById("top-container")!.style.height = "26vh";
    this.elBottomContainer.style.height = "74vh";
  }

  changeHeight() {
    console.log("dsaasdgjsa");
    console.log(document.getElementById("bottom-container"));
    // this.elBottomContainer.style.height = "63vh";
    this.elBottomContainer.style.height = "";
    this.elBottomContainer.style.height = "100px";

  }
}
