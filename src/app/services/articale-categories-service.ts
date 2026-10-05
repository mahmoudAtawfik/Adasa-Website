import { Injectable } from '@angular/core';
import { AricaleCategories } from '../models/aricale-categories';

@Injectable({
  providedIn: 'root',
})
export class ArticaleCategoriesService {
  categories: AricaleCategories[] = [
    {
      name: 'إضاءة',
      count: 3,
      icon: 'fa-solid fa-sun',

    },
    {
      name: 'بورتريه',
      count: 3,
      icon: 'fa-solid fa-user',

    },
    {
      name: 'مناظر طبيعية',
      count: 2,
      icon: 'fa-solid fa-mountain-sun',
    },
    {
      name: 'تقنيات',
      count: 5,
      icon: 'fa-solid fa-sliders',
    },
    {
      name: 'معدات',
      count: 3,
      icon: 'fa-solid fa-sun',

    }
  ];

}
