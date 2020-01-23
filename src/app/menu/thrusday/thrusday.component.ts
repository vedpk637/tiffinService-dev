import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-thrusday',
  templateUrl: './thrusday.component.html',
  styleUrls: ['./thrusday.component.css']
})
export class ThrusdayComponent implements OnInit {

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
