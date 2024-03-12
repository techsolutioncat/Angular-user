import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/pages/auth/contents/login/login.component';
// import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(LoginComponent);

export default bootstrap;
