import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  form;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth
        .login(this.form.value.email!, this.form.value.password!)
        .subscribe({
          next: () => {},
          error: (err) => {
            alert(err.error?.error || 'Login failed');
          },
        });
    }
  }
}
