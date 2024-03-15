import { Component } from '@angular/core';

@Component({
  selector: 'footer-root',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})

export class FooterComponent {
  //Import svg
  telegram: string =  '../../../assets/images/svg/telegram.svg';
  twitter: string =  '../../../assets/images/svg/twitter.svg';

  nothing: string =  '../../../assets/images/nothing.png';
  send: string =  '../../../assets/images/send.png';
  footerLogo: string =  '../../../assets/images/footer-logo.png';
  footermobileLogo: string =  '../../../assets/images/mobile-footer-logo.png';

  }
