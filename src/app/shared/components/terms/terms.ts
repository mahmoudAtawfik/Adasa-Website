import { Component } from '@angular/core';
import { LinearGradient } from '../linear-gradient/linear-gradient';
import { RouterLink } from '@angular/router';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-terms',
  imports: [LinearGradient, RouterLink, Alert],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {}
