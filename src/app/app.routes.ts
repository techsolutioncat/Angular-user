// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/contents/login/login.component';
import { NotfoundComponent } from './pages/404/404.component';
import { SignupComponent } from './pages/auth/contents/signup/signup.component';
import { CreatePasswordComponent } from './pages/auth/contents/createpassword/createpassword.component';
import { FocusComponent } from './pages/focus/focus.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'createpassword', component: CreatePasswordComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'focus', component: FocusComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add more routes as needed

  // Redirect all unknown routes to the home page
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
