import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [HttpClientModule, HeaderComponent, SubcontComponent],
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

  formData = {
    password: '',
    email: '',
  };

  msg: string = '';
  isval: boolean = true;
  @ViewChild('msgElement') msgElement!: ElementRef;
  @ViewChild('inputEmail') inputEmail!: ElementRef;
  @ViewChild('inputPassword') inputPassword!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private el: ElementRef, private http: HttpClient) { }

  onSubmit(event: Event, email: string, password: string) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.isval = true;

    if (!password.trim()) {
      this.msg = 'Please enter the password';
      this.isval = false;
      this.inputPassword.nativeElement.focus();
    }

    if (!email.trim()) {
      this.msg = 'Please enter the email';
      this.isval = false;
      this.inputEmail.nativeElement.focus();
    }

    if (!this.isval) {
      // Access the native element of msgElement and set its style
      this.msgElement.nativeElement.innerText = this.msg;
      this.msgElement.nativeElement.style.display = 'block';
    } else {
      this.formData.email = email.trim();
      this.formData.password = password.trim();
      this.http.post<any>('http://localhost:3000/users/login', this.formData)
        .subscribe(response => {
          if (response) {
            this.router.navigate(['/focus']); // Navigate to createpassword
            localStorage.setItem('userToken', response.accessToken);
          } else {
            this.msgElement.nativeElement.innerText = 'You are not a registered user.';
            this.msgElement.nativeElement.style.display = 'block';
          }
          // Handle success or show a success message
        }, error => {
          console.error('Error sending user data:', error);
          // Handle error or show an error message
        });
    }
  }
}
