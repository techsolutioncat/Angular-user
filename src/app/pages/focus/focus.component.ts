import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from './modal/modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'focus-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss',
})

export class FocusComponent {
  //Import Social icons
  plus: string = '../../../../../assets/images/svg/plus.svg';
  help: string = '../../../../../assets/images/svg/help-icon.svg';
  users: string = '../../../../../assets/images/svg/users.svg';
  fizz: string = '../../../../../assets/images/svg/fizz.svg';

  //Import Fontawesome
  faEdit = faEdit;
  faRemove = faRemove;
  page: string = 'Focus Point';
  limit: any = 1;
  items: any = [];
  count: any = 0;

  @ViewChild('inputLimit') inputLimit!: ElementRef;
  constructor(public dialog: MatDialog, private http: HttpClient) {
    if(localStorage.getItem('limit') === undefined) {
      localStorage.setItem('limit', this.limit);
    }
    this.onGetAll(localStorage.getItem('limit'));
  }

  onGetAll(limit: any): void {
    this.http.post<any>('http://localhost:3000/focus/all', {limit: limit})
      .subscribe(response => {
        this.items = response;
      }, error => {
        console.error('Error sending user data:', error);
        // Handle error or show an error message
      });

      this.http.post<any>('http://localhost:3000/focus/count', {})
      .subscribe(response => {
        this.count = response;
      }, error => {
        console.error('Error sending user data:', error);
        // Handle error or show an error message
      });

  }

  openModal(id: any, title: any, content: any): void {
    const dialogRef = this.dialog.open(ModalComponent, { data: { id: id, title: title, content: content, limit: this.limit} });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User input:', result);
      }
    });
  }

  openConfirmationDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { id: id }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed, proceed with action
        console.log("User confirmed.");
      } else {
        // User cancelled
        console.log("User cancelled.");
      }
    });
  }

  loadMore(): void {
    this.limit = this.limit + 1;
    localStorage.setItem('limit', this.limit);
    this.inputLimit.nativeElement.value = this.limit;
    this.onGetAll(this.limit);
  }
}
