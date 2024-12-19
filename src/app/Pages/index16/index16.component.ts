import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-index16',
    imports: [CommonModule],
    templateUrl: './index16.component.html',
    styleUrl: './index16.component.css'
})
export class Index16Component implements AfterViewInit {

  slides = [
    { title: 'Anand Acharya', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg.jpg' },
    { title: 'A Designer', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg.jpg' },
    { title: 'A Developer', subtitle: 'Hello & Welcome', image: 'assets/images/home-bg.jpg' }
  ];



  ngAfterViewInit(): void {
    // Access slickModal here after view initialization
    // console.log(this.slickModal);
  }
}
