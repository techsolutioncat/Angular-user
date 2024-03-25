// modal.component.ts

import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [HttpClientModule],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title: string = '';
  content: string = '';
  limit: string = '';
  id: any = '';

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private router: Router, private route: ActivatedRoute
  ) {
    this.id = data.id;
    this.title = data.title;
    this.limit = data.limit;
    this.content = data.content;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  msg: string = '';
  isval: boolean = true;
  @ViewChild('msgElement') msgElement!: ElementRef;
  @ViewChild('inputTitle') inputTitle!: ElementRef;
  @ViewChild('inputContent') inputContent!: ElementRef;

  onSubmit(event: Event, title: string, content: string) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.isval = true;

    if (!content.trim()) {
      this.msg = 'Please enter the Content';
      this.isval = false;
      this.inputContent.nativeElement.focus();
    }

    if (!title.trim()) {
      this.msg = 'Please enter the Title';
      this.isval = false;
      this.inputTitle.nativeElement.focus();
    }

    if (!this.isval) {
      // Access the native element of msgElement and set its style
      this.msgElement.nativeElement.innerText = this.msg;
      this.msgElement.nativeElement.style.display = 'block';
    } else {
      this.http.post<any>('http://localhost:3000/focus/new', { id: this.id, data: { title: title, content: content }, limit: this.limit })
        .subscribe(response => {
          // console.log('User data sent successfully:', response);
          // Navigate to the same route
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/focus']);
          });
          this.onClose();
        }, error => {
          console.error('Error sending user data:', error);
          // Handle error or show an error message
        });
    }
  }
}