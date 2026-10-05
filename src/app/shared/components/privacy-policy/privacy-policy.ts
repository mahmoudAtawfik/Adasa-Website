import { Component } from '@angular/core';
import { LinearGradient } from '../linear-gradient/linear-gradient';
import { RouterLink } from '@angular/router';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-privacy-policy',
  imports: [LinearGradient, RouterLink, Alert],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}
