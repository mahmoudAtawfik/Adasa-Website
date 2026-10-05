import { Component, inject } from '@angular/core';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';
import { DataArticale } from '../../../../services/data-articale';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-four',
  imports: [SectionLabel, SectionTitle, SectionSubtitle , RouterLink],
  templateUrl: './section-four.html',
  styleUrl: './section-four.css',
})
export class SectionFour {
  data=inject(DataArticale)
}
