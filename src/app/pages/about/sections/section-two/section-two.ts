import { Component, inject } from '@angular/core';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';
import { DataAboutFeature } from '../../../../services/data-about-feature';

@Component({
  selector: 'app-section-two',
  imports: [SectionSubtitle],
  templateUrl: './section-two.html',
  styleUrl: './section-two.css',
})
export class SectionTwo {
  datafeatures=inject(DataAboutFeature)
}
