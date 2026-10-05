import { Component, inject } from '@angular/core';
import { DataArticale } from '../../../services/data-articale';

@Component({
  selector: 'app-about-cards',
  imports: [],
  templateUrl: './about-cards.html',
  styleUrl: './about-cards.css',
})
export class AboutCards {
  data=inject(DataArticale)
}
