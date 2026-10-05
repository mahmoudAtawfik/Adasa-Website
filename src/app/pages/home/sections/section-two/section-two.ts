import { Component } from '@angular/core';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';
import { ArticaleCardWidth } from '../../../../shared/components/articale-card-width/articale-card-width';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-two',
  imports: [SectionLabel, SectionTitle, SectionSubtitle, ArticaleCardWidth, RouterLink],
  templateUrl: './section-two.html',
  styleUrl: './section-two.css',
})
export class SectionTwo {}
