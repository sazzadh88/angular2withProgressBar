import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor() { 
    this.user = {
      email : '',
      password : '',
      remember : ''
    }
  }

  ngOnInit() {
  }

  getLogin(){
    alert("Login Details"+ JSON.stringify(this.user));
    
  }

}
