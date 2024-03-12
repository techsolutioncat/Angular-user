import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.scss'
})
export class LoginComponent {
  //Import Social icons
  google: string = '../../../../../assets/images/google.png'; // Replace with your image URL
  metamask: string = '../../../../../assets/images/metamask.png'; // Replace with your image URL
  twitter: string = '../../../../../assets/images/twitter.png'; // Replace with your image URL
  instagram: string = '../../../../../assets/images/instagram.png'; // Replace with your image URL

  //Import svg
  mail: string = '../../../../../assets/images/svg/mail.svg';
  lock: string = '../../../../../assets/images/svg/lock.svg';

  title = 'Welcome Back';
  subtitle = 'Go ahead and log in. Get acces to your incredible account!';
}
