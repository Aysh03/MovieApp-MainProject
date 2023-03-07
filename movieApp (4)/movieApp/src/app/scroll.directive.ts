import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor() {}

  @HostBinding('class.nav-bar') newNav!: boolean;

  @HostListener('window:scroll') onScroll() {
    console.log(window.scrollY);
    if (window.scrollY >=150) {
      this.newNav = true;
    } 
    else {
      this.newNav = false;
    }
  }
}
