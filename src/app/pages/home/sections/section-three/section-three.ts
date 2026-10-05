import { Component, inject } from '@angular/core';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';
import { ArticaleCategoriesService } from '../../../../services/articale-categories-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-three',
  imports: [SectionLabel, SectionTitle, SectionSubtitle, RouterLink],
  templateUrl: './section-three.html',
  styleUrl: './section-three.css',
})
export class SectionThree {
  data=inject(ArticaleCategoriesService)
}
