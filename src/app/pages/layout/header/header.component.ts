import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Renderer2, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-root',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['../../auth/contents/layout/header/header.component.scss', './header.component.scss'],
})

export class HeaderComponent {
  @Input() page: any;

  // svg
  logo: string = '../../../assets/images/svg/logo.svg';
  MobileLogo: string = '../../../assets/images/svg/mobile-logo.svg';
  gold: string = '../../../assets/images/svg/gold.svg';
  homepage: string = '../../../assets/images/svg/homepage.svg';
  focus: string = '../../../assets/images/svg/focus.svg';
  rewards: string = '../../../assets/images/svg/rewards.svg';
  profile: string = '../../../assets/images/svg/profile.svg';
  statistics: string = '../../../assets/images/svg/statistics.svg';
  logout: string = '../../../assets/images/svg/logout.svg';
  megamenu: string = '../../../assets/images/svg/megamenu.svg';

  // Define an array of objects
  items: { name: string, svg: string, liClass: string }[] = [
    { name: 'Homepage', svg: this.homepage, liClass: 'nav-link d-flex ls-none' },
    { name: 'Focus Point', svg: this.focus, liClass: 'nav-link d-flex ls-none' },
    { name: 'Rewards', svg: this.rewards, liClass: 'nav-link d-flex ls-none' },
    { name: 'Profile', svg: this.profile, liClass: 'nav-link d-flex ls-none' },
    { name: 'My Statistics', svg: this.statistics, liClass: 'nav-link d-flex ls-none' },
    { name: 'Pricing', svg: this.gold, liClass: 'nav-link d-flex ls-none' }
  ];

  //Import Fontawesome
  faNavicon = faNavicon;
  faXmark = faXmark;

  constructor(private router: Router, private renderer: Renderer2) { }
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

  signout(): void {
    localStorage.setItem('userToken', '');
    this.router.navigate(['/login']); // Navigate to createpassword
    localStorage.setItem('limit', '1');
  }

  loopOperation(): void {
    console.log('item');

    this.items.forEach(item => {
      if(item.name == this.page) {
        item.liClass = 'nav-link d-flex ls-none active';
      }
    });
  }
}
