import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountEntity, AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-idf-login',
  templateUrl: './idf-login.component.html',
  styleUrls: ['./idf-login.component.scss']
})
export class IdfLoginComponent implements OnInit {

  @Output() userLogged = new EventEmitter();

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('account')) {
      const acc = JSON.parse(sessionStorage.getItem('account')!);
      console.log(acc);
      this.msalService.instance.setActiveAccount(acc);
      this.userLogged.emit(acc);
    }
  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  logIn() {
    this.msalService.loginPopup().subscribe(
      (response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account)
        this.userLogged.emit(response.account);
        const jsonAcc = JSON.stringify(response.account);
        sessionStorage.setItem('account', jsonAcc);
      },
      (error: any) => {
        console.log(error)
      },
      () => {
        console.log("complete");
      }
    );
  }

  logOut() {
    this.msalService.logout();
    this.msalService.instance.setActiveAccount(null);
    this.userLogged.emit(null);
    sessionStorage.clear();
  }

}
