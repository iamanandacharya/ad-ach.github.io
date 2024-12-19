import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
    selector: 'app-index13',
    imports: [],
    templateUrl: './index13.component.html',
    styleUrl: './index13.component.css'
})
export class Index13Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Full-Stack', 'Mobile-App', 'Web-App', 'Frontend'],
        typeSpeed: 40,
        backSpeed: 40,
        showCursor: true,
        cursorChar: '',
        // loop: true
      };

      const typed = new Typed('.typed-element', options);
    }
  }
}
