// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/contents/login/login.component';
import { SignupComponent } from './pages/auth/contents/signup/signup.component';
import { CreatePasswordComponent } from './pages/auth/contents/createpassword/createpassword.component';
import { FocusComponent } from './pages/focus/focus.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'createpassword', component: CreatePasswordComponent },
  { path: 'focus', component: FocusComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
