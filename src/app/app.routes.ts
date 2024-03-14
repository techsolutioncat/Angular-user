// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/contents/login/login.component';
import { SignupComponent } from './pages/auth/contents/signup/signup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add more routes as needed
];