import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services';
import { firstValueFrom } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private routerService = inject(Router);

  public form = this.fb.nonNullable.group({
    email: ['', 
      [
        Validators.required, 
        Validators.email
      ]
    ],
    password: ['', 
      [
        Validators.required, 
        Validators.minLength(6)
      ]
    ]
  });

  onSubmit(): void {
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log(response);
          this.routerService.navigateByUrl('/dashboard');
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
