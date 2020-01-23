import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  TotalAmount:number;
  Tamount:number=0;
  Tday:number=1;
  Tprice:number=0;
  Tquant=1;
  
  getvalue(val){
 
    
    console.log(val.target.value)

    if(val.target.value=="LUNCH")
     {
      this.Tprice=50;
      this.Tamount=this.Tprice*this.Tday*this.Tquant;
     
      }
    else
    if(val.target.value=="DINNER"){
      this.Tprice=60;
      this.Tamount=this.Tprice*this.Tday*this.Tquant;
    }
    else
    if(val.target.value=="LUNCH & DINNER"){
      this.Tprice=100;
      this.Tamount=this.Tprice*this.Tday*this.Tquant;
    }
    else{
      this.Tprice=0;
      this.Tamount=this.Tprice;
    }

  }
  subscripted(val){
    console.log(val.target.value)

      if(val.target.value=="1 Month"){
        this.Tday=30;
        this.Tamount=this.Tprice*this.Tday*this.Tquant;
      }
      else
          if(val.target.value=="2 Month"){
            this.Tday=60;
            this.Tamount=this.Tprice*this.Tday*this.Tquant;
          }
          else
          if(val.target.value=="3 Month"){
            this.Tday=90;
            this.Tamount=this.Tprice*this.Tday*this.Tquant;
          }
          else
          if(val.target.value=="6 Month"){
            this.Tday=180;
            this.Tamount=this.Tprice*this.Tday*this.Tquant;
          }
          else{
            this.Tday = 1;
            this.Tamount=this.Tprice*this.Tday*this.Tquant;
          }
  }
     
  selectquantity(val){
    console.log(val.target.value)
    this.Tquant=val.target.value;
    if(val.target.value ==="Select Quantity"){
      this.Tamount=this.Tprice*this.Tday;
    }
    else{
      this.Tamount=this.Tprice*this.Tday*this.Tquant
    }
  }

}
