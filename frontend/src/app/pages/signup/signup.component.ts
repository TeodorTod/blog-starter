import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {
  signupForm!: FormGroup;
  fb = inject(FormBuilder)

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
