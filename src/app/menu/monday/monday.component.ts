import { Component, OnInit, OnDestroy } from '@angular/core';
import { DaysCartService } from 'src/app/services/days-cart.service';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit,OnDestroy {

  Lunch =[];
  Dinner=[];
 isValid:boolean;

  constructor(private _daysCart:DaysCartService) { }

  ngOnInit() {
    this.Lunch=this._daysCart.Lunch;
    this.Dinner=this._daysCart.Dinner;

  }
  addDinner(obj){
  obj.isValid=false;
  this._daysCart.setaddMenuCart(obj);
  
  }
  addLunch(obj){
    obj.isValid=false;
    this._daysCart.setaddMenuCart(obj);
  }

  ngOnDestroy(){
    this.isValid=true;
  }


}
