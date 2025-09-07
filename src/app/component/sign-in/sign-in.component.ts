import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

 name: string = '';
  email: string = '';
  password: string = '';

  onSignUp() {
    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password
    }));

    alert('Account Created Successfully! 🎉');
  }
}
