import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  templateUrl: './confirm-dialog.component.html',
  imports: [HttpClientModule],
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  id: any = '';
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private router: Router, private route: ActivatedRoute,
    private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.http.post<any>('http://localhost:3000/focus/remove', { id: this.id })
      .subscribe(response => {
        console.log('User data sent successfully:', response);
        // Navigate to the same route
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/focus']);
        });
        this.dialogRef.close(true);
      }, error => {
        console.error('Error sending user data:', error);
        // Handle error or show an error message
      });
  }
}
