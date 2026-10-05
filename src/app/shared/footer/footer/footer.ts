import { Component, inject, OnInit } from '@angular/core';
import { LineFooter } from '../line-footer/line-footer';
import { DiscoverLinks } from '../discover-links/discover-links';
import { Socialmedia } from '../socialmedia/socialmedia';
import { LinksCategoriesFooter } from '../../components/links-categories-footer/links-categories-footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LineFooter, DiscoverLinks, Socialmedia, LinksCategoriesFooter, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer  {
}
