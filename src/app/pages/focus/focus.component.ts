import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

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
}
