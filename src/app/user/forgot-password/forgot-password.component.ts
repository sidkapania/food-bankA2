import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  foodItemPattern = '[a-zA-Z ]*';
  signinForm: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signinForm = this.formBuilder.group({ email: ['', [Validators.required, Validators.email]] });
  }

  ngOnDestroy() {}

  get values() {
    return this.signinForm.controls;
  }

  clickMethod() {
    if (confirm('An email with instructions how to reset your password have been sent to your email id.')) {
      this.router.navigateByUrl('/home');
    }
  }
}
