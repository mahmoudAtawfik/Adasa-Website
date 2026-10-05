import { Component } from '@angular/core';
import { SectionOne } from '../sections/section-one/section-one';
import { SectionTwo } from '../sections/section-two/section-two';
import { SectionThree } from '../sections/section-three/section-three';
import { SectionFour } from '../sections/section-four/section-four';

@Component({
  selector: 'app-about',
  imports: [SectionOne, SectionTwo, SectionThree, SectionFour],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
