import { Component } from '@angular/core';
import { LinearGradient } from '../../../../shared/components/linear-gradient/linear-gradient';
import { SectionLabel } from '../../../../shared/components/section-label/section-label';

@Component({
  selector: 'app-blog-one',
  imports: [LinearGradient, SectionLabel],
  templateUrl: './blog-one.html',
  styleUrl: './blog-one.css',
})
export class BlogOne {}
