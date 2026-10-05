import { Injectable } from '@angular/core';
import { NavInterface } from '../models/nav-interface';

@Injectable({
  providedIn: 'root',
})
export class Navlink {
  navLinks: NavInterface[] = [
  {
    name: 'الرئيسية',
    path: 'home'
  },
  {
    name: 'المدونة',
    path: 'blog'
  },
  {
    name: 'من نحن',
    path: 'about'
  }
];
}
