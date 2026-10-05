import { Component, inject } from '@angular/core';
import { BtnPrimary } from '../../components/btn-primary/btn-primary';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Navlink } from '../../../services/navlink';

@Component({
  selector: 'app-navbar',
  imports: [BtnPrimary, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isMenuOpen = false;
links=inject(Navlink)
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
onLinkClick() {
  console.log('Link clicked');
}
}
