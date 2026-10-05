import { Injectable } from '@angular/core';
import { AboutFeature } from '../models/about-feature';

@Injectable({
  providedIn: 'root',
})
export class DataAboutFeature {
  features: AboutFeature[] = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'الجودة أولاً',
    description: 'محتوى مدروس ومكتوب بخبرة'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'تركيز عملي',
    description: 'أمثلة واقعية يمكنك تطبيقها اليوم'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'المجتمع',
    description: 'تعلم مع آلاف المصورين'
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    title: 'دائماً محدث',
    description: 'أحدث الاتجاهات وأفضل الممارسات'
  }
];
}
