import { Component } from '@angular/core';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';
import { AboutCards } from '../../../../shared/components/about-cards/about-cards';

@Component({
  selector: 'app-section-three',
  imports: [SectionLabel, SectionSubtitle, AboutCards],
  templateUrl: './section-three.html',
  styleUrl: './section-three.css',
})
export class SectionThree {}
