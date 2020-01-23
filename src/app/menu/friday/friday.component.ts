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
  proCount:number;
  inputValue:string;
  constructor(private _FoodServices:DataserviceService) { }


  ngOnInit() {
    this.Lunch=this._FoodServices.Lunch;
    this.Dinner=this._FoodServices.Dinner
  }
  isClicked(obj){
    obj.isValid=false;
  }
  addCart(uname){
    //this.proCount=uname.value;
   /// console.log('friday',uname)
    this._FoodServices.setCartValueObject(uname);
  }

}
