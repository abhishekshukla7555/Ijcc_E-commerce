import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar2',
  standalone: false,
  templateUrl: './nav-bar2.component.html',
  styleUrl: './nav-bar2.component.css'
})
export class NavBar2Component {
 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
