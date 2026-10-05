import { Component, inject } from '@angular/core';
import { LinearGradient } from '../../../../shared/components/linear-gradient/linear-gradient';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { Hightlight } from '../../../../directive/hightlight';
import { DataGlasscard } from '../../../../services/data-glasscard';

@Component({
  selector: 'app-section-one',
  imports: [LinearGradient, SectionLabel ,Hightlight],
  templateUrl: './section-one.html',
  styleUrl: './section-one.css',
})
export class SectionOne {
  data=inject(DataGlasscard)

}
