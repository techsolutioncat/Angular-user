import { Component } from '@angular/core';

@Component({
  selector: 'header-root',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  //Import Social icons
  image: string = '../../../../../assets/images/header-image.png'; // Replace with your image URL
}
