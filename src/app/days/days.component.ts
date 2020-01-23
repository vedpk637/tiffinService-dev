import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit, OnChanges{

   proCount:string="3";
  constructor(private _cartValue:DataserviceService) { 
    this._cartValue.cartValue.subscribe(uname =>{this.proCount=uname})
  }
  ngOnChanges(changes:SimpleChanges){
     console.log('simple changes called')
  }
  ngOnInit() {

  }
  

}
