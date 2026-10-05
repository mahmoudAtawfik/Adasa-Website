import { Injectable } from '@angular/core';
import { GlassCardInterface } from '../models/glass-card-interface';

@Injectable({
  providedIn: 'root',
})
export class DataGlasscard {
   glass_card_objects: GlassCardInterface[] = [{
      icon: "fa-newspaper", num: +50, title: "مقالة" ,plus:"+"
    }, {
      icon: "fa-users", num: +10, title: "قارئ" ,alf:"الف" , plus:"+"

    }, {
      icon: "fa-folder-open", num: 4, title: "تصنيفات"

    }, {
      icon: "fa-pen-nib", num: 6, title: "كاتب"

    }, {
      icon: "fa-users", num: 2, title: "قارئ شهرياً" ,alf:"مليون" , plus:"+"

    },{
      icon: "fa-newspaper ", num: 500, title: " مقالة منشورة " , plus:"+"

    },{
      icon: "fa-pen-nib", num: 50, title: "كاتب خبير" ,  plus:"+"

    },{
      icon: "fa-book-open", num: 15, title: "تصنيف" ,  plus:"+"

    }
    ]
}
