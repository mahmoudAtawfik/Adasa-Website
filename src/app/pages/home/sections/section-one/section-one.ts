import { Component, inject } from '@angular/core';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';
import { BtnPrimary } from '../../../../shared/components/btn-primary/btn-primary';
import { RouterLink } from '@angular/router';
import { DataGlasscard } from '../../../../services/data-glasscard';
import { LinearGradient } from '../../../../shared/components/linear-gradient/linear-gradient';
import { Hightlight } from '../../../../directive/hightlight';


@Component({
  selector: 'app-section-one',
  imports: [SectionLabel, RouterLink, BtnPrimary, LinearGradient , Hightlight],
  templateUrl: './section-one.html',
  styleUrl: './section-one.css',
})
export class SectionOne {
  data=inject(DataGlasscard)

}
