import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  namePattern = '[a-zA-Z ]*';
  contactForm: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({ email: ['', [Validators.required, Validators.email]] });
  }
  get values() {
    return this.contactForm.controls;
  }

  clickMethod() {
    if (confirm('Your query/feedback has been successfully submitted.')) {
      this.router.navigateByUrl('/home');
    }
  }
}
