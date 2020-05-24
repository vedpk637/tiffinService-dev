import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaysCartService {

  addMenuCart=[];

  Lunch=[{"id":1,name:"Peas pulao with carrot raita","price":"100","isValid":"true"},
  {"id":2,name:"Red kidney beans or rajma","price":"80","isValid":"true"},
  {"id":3,name:"Chapati, steamed chicken curry and mixed vegetable salad","price":"90","isValid":"true"},
  {"id":4,name:"Pasta salad","price":"110","isValid":"true"}
]

Dinner=[
    {"id":5, name:"Chole Bhature",price:"40","isValid": "true"},
    {"id":6,name:"Naan/Rumali Roti",price:"30","isValid": "true"},
    {"id":7,name:"Baigan Bharta",price:"60","isValid": "true"},
    {"id":8,name:"Parathe",price:"30","isValid": "true"},
    {"id":9,name:"Papad Ki Sabji",price:"30","isValid": "true"},
]

  constructor() { }

   addCartMenu = new Subject<any>();

   setaddMenuCart(data){
     this.addMenuCart.push(data);
     this.addCartMenu.next(this.addMenuCart);
     
   }
   getaddMenuCart(){
     return this.addMenuCart;
   }
}
