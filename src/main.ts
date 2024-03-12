import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { LoginComponent } from './app/pages/auth/contents/login/login.component';

bootstrapApplication(LoginComponent)
  .catch((err) => console.error(err));
