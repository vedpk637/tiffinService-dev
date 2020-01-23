import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {

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
