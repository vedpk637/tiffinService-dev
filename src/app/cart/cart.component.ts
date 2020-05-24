import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs';
import { DaysCartService } from '../services/days-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  
  cartValueDAta:any;
  cartValueDataSubscription:Subscription;
  constructor(private _cartDataService:DataserviceService,private _daysCartMenu:DaysCartService)
   {
    this._cartDataService.cartValue.subscribe(uname =>{this.items = uname});
    this._daysCartMenu.addCartMenu.subscribe(uname =>{this.items = uname});


   }
   items = [
  //  { "id": 15, "name": "Aalu matar", "price": "170.00", "isValid": "true","qty": "1" },
  //  { "id": 16, "name": "Kadai Vegetable Sabzi", "description": "Kadai Vegetable Sabzi", "price": "302.00", "isValid": "true","qty": "1"  },
  //  { "id": 17, "name": "Achari Aloo Sabzi", "description": "Achari Aloo Sabzi", "price": "279.00", "isValid": "true","qty": "1"  }
  ];

  ngOnInit() {
    this.cartValueDAta = this._cartDataService.getCartValueObject();
    this.cartValueDAta = this._daysCartMenu.getaddMenuCart();

   this.cartValueDataSubscription = this._cartDataService.cartValue.subscribe(data=>{
      this.cartValueDAta = data;
   this.cartValueDataSubscription = this._daysCartMenu.addCartMenu.subscribe(data=>{
      this.cartValueDAta = data;
      })
    });

    console.log(this.cartValueDAta);

  // this.items = [this.cartValueDAta];
  }
  onclick(obj) {
   // this.items = this.items.filter(s => s.id != cartValueDAta.id);
    this.cartValueDAta = this.cartValueDAta.filter(s => s.id !=obj.id)
    obj.isValid = true;
    console.log(this.items);
    console.log(obj)
      
  }


  ngOnDestroy(){
    this.cartValueDataSubscription.unsubscribe();
  }
}
