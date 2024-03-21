import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SubcontComponent } from '../layout/subcont/subcont.component';
import { HeaderComponent } from '../layout/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'login-root',
  standalone: true,
  templateUrl: './createpassword.component.html',
  imports: [HeaderComponent, SubcontComponent, HttpClientModule],
  styleUrls: ['../scss/auth.component.scss', '../scss/input.component.scss', '../scss/button.component.scss'],
})

export class CreatePasswordComponent implements OnInit {
  //Import svg
  lock: string = '../../../../../assets/images/svg/lock.svg';

  title = 'Create Password';
  subtitle = 'Set your security password. Recommended usage of at least 1 number, 1 uppercase letter and 1 special character';

  constructor(private router: Router, private route: ActivatedRoute, private el: ElementRef, private http: HttpClient) { }
  navigateToComponent(page: string) {
    this.router.navigate([page]); // Navigate to createpassword
  }

  paramUsername: string = '';
  paramEmail: string = '';
  paramPassword: string = '';

  formData = {
    username: '',
    password: '',
    email: '',
    phone: ''
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formData.username = params['username'];
      this.formData.email = params['email'];
      this.formData.phone = params['phone'];
    });
  }

  msg: string = '';
  isval: boolean = true;
  @ViewChild('myElement') myElement!: ElementRef;
  @ViewChild('inputPassword') inputPassword!: ElementRef;
  @ViewChild('inputRePassword') inputRePassword!: ElementRef;
  onSubmit(event: Event, password: string, repassword: string) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.isval = true;

    if (!password.trim()) {
      this.msg = 'Please enter the password';
      this.isval = false;
      this.inputPassword.nativeElement.focus();
    }

    if (password.trim() !== repassword.trim()) {
      this.msg = 'Please confirm the password';
      this.isval = false;
      this.inputRePassword.nativeElement.focus();
    }

    if (password.trim() && password.trim().length < 8) {
      this.msg = 'Please enter a password of at least 8 characters.';
      this.isval = false;
      this.inputPassword.nativeElement.focus();
    }

    if (!this.isval) {
      // Access the native element of myElement and set its style
      this.myElement.nativeElement.innerText = this.msg;
      this.myElement.nativeElement.style.display = 'block';
    } else {
      this.formData.password = password.trim();
      console.log(this.formData);
      this.http.post('http://localhost:3000/api/formdata', this.formData).subscribe(response => {
        console.log('Form data added successfully:', response);
        // this.navigateToComponent('/login');
      });
    }
  }
}
