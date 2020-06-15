import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '@app/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatInputModule,
    MaterialModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],

  declarations: [ProfileComponent, ForgotPasswordComponent],
  providers: [AppComponent],
})
export class UserModule {}
