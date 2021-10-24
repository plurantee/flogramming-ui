import { HostListener } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar: any;

  constructor() { }

  ngOnInit(): void {
    this.navbar = document.getElementById('navbar');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (this.navbar) {
      if (window.scrollY === 0) {
        this.navbar.classList.remove('nav-scrolled');
        this.navbar.classList.add('nav-top');
      } else if (!this.navbar.classList.contains('nav-scrolled')) {

        this.navbar.classList.remove('nav-top');
        this.navbar.classList.add('nav-scrolled');
      }

    }

  }


}
