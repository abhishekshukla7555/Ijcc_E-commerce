import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 email: string = '';
password: string = '';

onLogin() {
  // Save to localStorage
  localStorage.setItem('user', JSON.stringify({
    email: this.email,
    password: this.password
  }));

  alert('Login Successful!');
}
}
