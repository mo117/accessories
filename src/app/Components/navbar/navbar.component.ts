import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  NavClick() {
    let element = document.querySelector('.show');
    if(element != null) {
      element.classList.remove('show')
    }
  }
}
