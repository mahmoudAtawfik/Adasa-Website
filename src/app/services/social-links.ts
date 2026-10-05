import { Injectable } from '@angular/core';
import { SocialLinki } from '../models/social-linki';

@Injectable({
  providedIn: 'root',
})
export class SocialLinks {
  socialLinks: SocialLinki[] = [
  {
    name: 'twitter',
    url: 'https://twitter.com/adasah',
    icon: 'fa-brands fa-x-twitter'
  },
  {
    name: 'github',
    url: 'https://github.com/adasah',
    icon: 'fa-brands fa-github'
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/company/adasah',
    icon: 'fa-brands fa-linkedin-in'
  },
  {
    name: 'youtube',
    url: 'https://youtube.com/@adasah',
    icon: 'fa-brands fa-youtube'
  }
];
}
