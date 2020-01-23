import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-wednesday',
  templateUrl: './wednesday.component.html',
  styleUrls: ['./wednesday.component.css']
})
export class WednesdayComponent implements OnInit {

  Lunch=[];
  Dinner=[];
 

  constructor(private _foodService:DataserviceService) { }

  ngOnInit() {
    this.Lunch=this._foodService.Lunch;
    this.Dinner=this._foodService.Dinner;

  }
   isValid:boolean;
  isClicked(proDinner){
    proDinner.isValid=false;
  }

}
