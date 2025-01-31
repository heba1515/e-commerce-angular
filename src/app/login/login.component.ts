import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  handleSubmitForm(form: any) {
    if (form.invalid) {
      return;
    }

    console.log(this.user);

    this.router.navigate(['/']);
  }
}
