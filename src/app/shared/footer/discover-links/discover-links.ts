import { Component, inject } from '@angular/core';
import { Navlink } from '../../../services/navlink';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discover-links',
  imports: [RouterLink],
  templateUrl: './discover-links.html',
  styleUrl: './discover-links.css',
})
export class DiscoverLinks {
  links=inject(Navlink)
}
