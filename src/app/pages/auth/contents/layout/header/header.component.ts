import { Component, Renderer2, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-root',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../scss/button.component.scss'],
})

export class HeaderComponent {
  //Import Social icons
  logo: string = '../../../../../assets/images/svg/logo.svg'; // Replace with your image URL
  MobileLogo: string = '../../../../../assets/images/svg/mobile-logo.svg'; // Replace with your image URL

  //Import Fontawesome
  faNavicon = faNavicon;
  faXmark = faXmark;

  constructor(private renderer: Renderer2) { }
  showMobileMenu: boolean = false;
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    const closemenu = document.getElementById('closemenu');
    const openmenu = document.getElementById('openmenu');
    const MbileMenuList = document.getElementById('MbileMenuList');
    
    if (this.showMobileMenu) {
      this.renderer.setStyle(closemenu, 'display', 'block');
      this.renderer.setStyle(openmenu, 'display', 'none');
      this.renderer.setStyle(MbileMenuList, 'display', 'block');
    } else {
      this.renderer.setStyle(closemenu, 'display', 'none');
      this.renderer.setStyle(openmenu, 'display', 'block');
      this.renderer.setStyle(MbileMenuList, 'display', 'none');
    }
  };

  @HostListener('window:scroll', [])
  onScroll(): void {
    const headerMainWrapper = document.getElementById('headerMainWrapper');
    // Detect scroll event
    if (window.scrollY > 0) {
      this.renderer.setStyle(headerMainWrapper, 'background-color', '#f9f8f4');
      this.renderer.setStyle(headerMainWrapper, 'boxShadow', '10px 6px 17px #e3dab9');
    } else {
      this.renderer.setStyle(headerMainWrapper, 'background-color', 'transparent');
      this.renderer.setStyle(headerMainWrapper, 'boxShadow', 'unset');
    }
  }
}
