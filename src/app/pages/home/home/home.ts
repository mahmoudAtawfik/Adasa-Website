import { Component } from '@angular/core';
import { SectionOne } from '../sections/section-one/section-one';
import { SectionTwo } from '../sections/section-two/section-two';
import { SectionThree } from '../sections/section-three/section-three';
import { SectionFour } from '../sections/section-four/section-four';
import { SectionFive } from '../sections/section-five/section-five';

@Component({
  selector: 'app-home',
  imports: [SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
