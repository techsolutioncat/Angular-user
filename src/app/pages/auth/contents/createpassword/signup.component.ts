import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './createpassword.component.html',
  imports: [HeaderComponent, SubcontComponent],
  styleUrls: ['../scss/auth.component.scss', '../scss/input.component.scss', '../scss/button.component.scss'],
})

export class CreatePasswordComponent {
  //Import svg
  lock: string = '../../../../../assets/images/svg/lock.svg';
  
  title = 'Create Password';
  subtitle = 'Set your security password. Recommended usage of at least 1 number, 1 uppercase letter and 1 special character';

  constructor(private router: Router) { }
  navigateToComponent(page: string) {
    this.router.navigate([page]); // Navigate to createpassword
  }
}
