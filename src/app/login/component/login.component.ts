import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public isLogin: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    console.log('home');
    this.router.navigate(['/home']);
  }
  register() {
    console.log('Register');
    this.isLogin = true;
  }
  showRegister() {
    this.isLogin = false;
  }
  onSubmit() {}
}
