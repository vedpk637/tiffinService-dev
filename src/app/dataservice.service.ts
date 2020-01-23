import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  cartVAlueObject=[];
  cartValue= new Subject<any>();


  Lunch=[{name:"Peas pulao with carrot raita","price":"100","id":1},
  {name:"Red kidney beans or rajma","price":"80","id":2},
  {name:"Chapati, steamed chicken curry and mixed vegetable salad","price":"90","id":3},
  {name:"Pasta salad","price":"110","id":4}
]

Dinner=[
    {name:"Chole Bhature",price:"40","isValid": "true"},
    {name:"Naan/Rumali Roti",price:"30","isValid": "true"},
    {name:"Baigan Bharta",price:"60","isValid": "true"},
    {name:"Parathe",price:"30","isValid": "true"},
    {name:"Papad Ki Sabji",price:"30","isValid": "true"},
]

 product=[{ "id": 1, "name": "Aalu matar", "description": "Aalu matar", "price": "170.00", "isValid": "true" },
 { "id": 2, "name": "Kadai Vegetable Sabzi", "description": "Kadai Vegetable Sabzi", "price": "302.00", "isValid": "true" },
  { "id": 3, "name": "Achari Aloo Sabzi", "description": "Achari Aloo Sabzi", "price": "279.00", "isValid": "true" }]


  constructor(private http:HttpClient) { }



 products():Observable<any>{
   return this.http.get('https://jsonplaceholder.typicode.com/users')
 }

  
  setCartValueObject(data){
    this.cartVAlueObject.push(data);
    this.cartValue.next(this.cartVAlueObject);
  }

  getCartValueObject(){
    return this.cartVAlueObject;
  }

}
