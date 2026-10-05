import { Component } from '@angular/core';
import { Hightlight } from '../../../../directive/hightlight';
import { SectionSubtitle } from '../../../../shared/components/section-subtitle/section-subtitle';

@Component({
  selector: 'app-section-five',
  imports: [Hightlight, SectionSubtitle],
  templateUrl: './section-five.html',
  styleUrl: './section-five.css',
})
export class SectionFive {}
