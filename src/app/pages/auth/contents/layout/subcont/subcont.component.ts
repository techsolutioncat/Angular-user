import { Component } from '@angular/core';

@Component({
  selector: 'subcont-root',
  standalone: true,
  templateUrl: './subcont.component.html',
  styleUrl: './subcont.component.scss',
})

export class SubcontComponent {
  //Import Social icons
  image: string = '../../../../../assets/images/subcont-image.png'; // Replace with your image URL
}
