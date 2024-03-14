import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'signup-root',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss', '../subcont.component.scss', '../input.component.scss', '../button.component.scss'],
})

export class SignupComponent {
  //Import Social icons
  google: string = '../../../../../assets/images/google.png'; // Replace with your image URL
  metamask: string = '../../../../../assets/images/metamask.png'; // Replace with your image URL
  twitter: string = '../../../../../assets/images/twitter.png'; // Replace with your image URL
  instagram: string = '../../../../../assets/images/instagram.png'; // Replace with your image URL
  image: string = '../../../assets/images/subcont-image.png'; // Replace with your image URL

  //Import svg
  mail: string = '../../../../../assets/images/svg/mail.svg';
  lock: string = '../../../../../assets/images/svg/lock.svg';

  title = 'Create Account';
  subtitle = 'Provide necessary information to proceed with registration or sign up with social media';
}
