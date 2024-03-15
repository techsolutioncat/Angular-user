import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [HeaderComponent, SubcontComponent],
  styleUrls: ['../scss/auth.component.scss', '../scss/input.component.scss', '../scss/button.component.scss'],
})

export class SignupComponent {
  //Import Social icons
  google: string = '../scss/../../../../assets/images/google.png'; // Replace with your image URL
  metamask: string = '../../../../../assets/images/metamask.png'; // Replace with your image URL
  twitter: string = '../../../../../assets/images/twitter.png'; // Replace with your image URL
  instagram: string = '../../../../../assets/images/instagram.png'; // Replace with your image URL
  image: string = '../../../assets/images/subcont-image.png'; // Replace with your image URL

  //Import svg
  mail: string = '../../../../../assets/images/svg/mail.svg';
  phone: string = '../../../../../assets/images/svg/phone.svg';
  user: string = '../../../../../assets/images/svg/user.svg';
  
  title = 'Create Account';
  subtitle = 'Provide necessary information to proceed with registration or sign up with social media';

  constructor(private router: Router) { }
  navigateToComponent(page: string) {
    this.router.navigate([page]); // Navigate to signup
  }
}
