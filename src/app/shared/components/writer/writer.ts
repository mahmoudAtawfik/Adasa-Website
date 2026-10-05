import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-writer',
  imports: [],
  templateUrl: './writer.html',
  styleUrl: './writer.css',
})
export class Writer {
  @Input() path!:string
  @Input() name!:string
  @Input() wotk!:string
}
