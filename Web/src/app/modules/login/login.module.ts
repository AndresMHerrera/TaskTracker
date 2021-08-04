import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
