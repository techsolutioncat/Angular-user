import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'focus-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FontAwesomeModule],
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

  constructor(public dialog: MatDialog) { }

  openModal(id: any): void {
    const dialogRef = this.dialog.open(ModalComponent, { data: { id: id } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User input:', result);
      }
    });
  }
}
