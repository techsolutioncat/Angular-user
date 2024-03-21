import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [HttpClientModule, HeaderComponent, SubcontComponent],
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

  private apiUrl = 'http://localhost:3000/users';
  @ViewChild('msgElement') msgElement!: ElementRef;

  constructor(private router: Router, private http: HttpClient) { }
  navigateToCreatePassword(page: string, event: Event, username: string, email: string, phone: string) {
    if (username.trim() && email.trim() && phone.trim()) {
      event.preventDefault(); // Prevent the default form submission behavior
      const url = `${this.apiUrl}/${email.trim()}`;
      this.http.get<any>(url)
        .subscribe(response => {
          if (response) {
            this.msgElement.nativeElement.style.display = 'block';
          } else {
            this.router.navigate([page, { username: username, email: email, phone: phone }]); // Navigate to signup
          }
          // Handle success or show a success message
        }, error => {
          console.error('Error sending user data:', error);
          // Handle error or show an error message
        });
    }
  }

  navigateToLogin(page: string) {
    this.router.navigate([page]); // Navigate to signup
  }
}
