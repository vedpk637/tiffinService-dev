import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.css']
})
export class FridayComponent implements OnInit {
  Lunch=[];
  Dinner=[];
  isValid:boolean;
  constructor(private _FoodServices:DataserviceService) { }


  ngOnInit() {
    this.Lunch=this._FoodServices.Lunch;
    this.Dinner=this._FoodServices.Dinner
  }
  isClicked(obj){
    obj.isValid=false;
  }

  /** addcart function will store cart data to dataService ***/
  addCart(uname){
    this._FoodServices.setCartValueObject(uname);
  }

}
