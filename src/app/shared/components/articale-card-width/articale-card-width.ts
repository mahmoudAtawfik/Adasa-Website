import { Component, inject } from '@angular/core';
import { DataArticale } from '../../../services/data-articale';
import { DataArticaleInterface } from '../../../models/data-articale-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articale-card-width',
  imports: [RouterLink],
  templateUrl: './articale-card-width.html',
  styleUrl: './articale-card-width.css',
})
export class ArticaleCardWidth {
  alldata=inject(DataArticale)
  get getdata() :DataArticaleInterface[] {
    return this.alldata.data.slice(0,3)
  }
}
