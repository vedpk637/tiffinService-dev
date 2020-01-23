import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  cartValueDAta:any;
  cartValueDataSubscription:Subscription;
  constructor(private _cartDataService:DataserviceService) {
    this._cartDataService.cartValue.subscribe(uname =>{this.items = uname})
   }
  ngOnInit() {
    this.cartValueDAta = this._cartDataService.getCartValueObject();

   this.cartValueDataSubscription = this._cartDataService.cartValue.subscribe(data=>{
      this.cartValueDAta = data;
    });

    console.log(this.cartValueDAta);

  //  this.items = [this.cartValueDAta];
  }
  items = [{ "id": 1, "name": "Aalu matar", "price": "170.00", "isValid": "true","qty": "1" },
  { "id": 2, "name": "Kadai Vegetable Sabzi", "description": "Kadai Vegetable Sabzi", "price": "302.00", "isValid": "true","qty": "1"  },
  { "id": 3, "name": "Achari Aloo Sabzi", "description": "Achari Aloo Sabzi", "price": "279.00", "isValid": "true","qty": "1"  }]

  onclick(ob) {
    this.items = this.items.filter(s=> s.id != ob.id)
    console.log(this.items)
  }


  ngOnDestroy(){
    this.cartValueDataSubscription.unsubscribe();
  }
}
