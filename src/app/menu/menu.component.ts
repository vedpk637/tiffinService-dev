import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _datservice:DataserviceService) { }
  arr=[];
  ngOnInit() {
  this.arr=this._datservice.product;
   //this._datservice.products().subscribe(dataproduct => this.arr=dataproduct)
  }
  

  isValid: boolean;
  onAddPro(obj) {
    obj.isValid = false;
  }

}
