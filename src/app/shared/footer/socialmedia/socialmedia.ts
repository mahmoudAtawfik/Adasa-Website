import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../../services/social-links';

@Component({
  selector: 'app-socialmedia',
  imports: [],
  templateUrl: './socialmedia.html',
  styleUrl: './socialmedia.css',
})
export class Socialmedia {
  links=inject(SocialLinks)
}
