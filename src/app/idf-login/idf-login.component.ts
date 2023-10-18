import { Component, Output, Input } from '@angular/core';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthenticationResult } from '@azure/msal-browser';


@Component({
  selector: 'app-idf-login',
  templateUrl: './idf-login.component.html',
  styleUrls: ['./idf-login.component.scss']
})
export class IdfLoginComponent {
  @Output() changed = new EventEmitter<any>()
  @Output() loggedIn = new EventEmitter<any>()
  @Input() trigger: any;

  logIn(){
    this.changed.emit();
  }

  continue(){
    document.getElementById('login-div')!.classList.add('hidden');
    this.loggedIn.emit();
  }
}
