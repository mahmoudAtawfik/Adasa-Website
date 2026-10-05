import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-sec-three',
  imports: [RouterLink],
  templateUrl: './details-sec-three.html',
  styleUrl: './details-sec-three.css',
})
export class DetailsSecThree {
  @Input() data!:any
}
