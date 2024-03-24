import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project';

  constructor(private router: Router, private http: HttpClient) {
    if (typeof localStorage !== 'undefined') {

      this.http.post<any>('http://localhost:3000/checkauth', { token: localStorage.getItem('userToken') })
        .subscribe(response => {
          if (!response)
            router.navigate(['/login']); // Navigate to createpassword
        }, error => {
          console.error('Error sending user data:', error);
          // Handle error or show an error message
        });
    }
  }
}
