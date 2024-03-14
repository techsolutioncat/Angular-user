import { Component } from '@angular/core';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [HeaderComponent, SubcontComponent],
  styleUrls: ['../scss/auth.component.scss', '../scss/input.component.scss', '../scss/button.component.scss'],
})

export class LoginComponent {
  //Import Social icons
  google: string = '../../../../../assets/images/google.png'; // Replace with your image URL
  metamask: string = '../../../../../assets/images/metamask.png'; // Replace with your image URL
  twitter: string = '../../../../../assets/images/twitter.png'; // Replace with your image URL
  instagram: string = '../../../../../assets/images/instagram.png'; // Replace with your image URL
  image: string = '../../../assets/images/subcont-image.png'; // Replace with your image URL

  //Import svg
  mail: string = '../../../../../assets/images/svg/mail.svg';
  lock: string = '../../../../../assets/images/svg/lock.svg';

  title = 'Welcome Back';
  subtitle = 'Go ahead and log in. Get acces to your incredible account!';
}
