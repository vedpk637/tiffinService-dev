import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/Navbar.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { MondayComponent } from './menu/monday/monday.component';
import { TuesdayComponent } from './menu/tuesday/tuesday.component';
import { WednesdayComponent } from './menu/wednesday/wednesday.component';
import { ThrusdayComponent } from './menu/thrusday/thrusday.component';
import { FridayComponent } from './menu/friday/friday.component';
import { SaturdayComponent } from './menu/saturday/saturday.component';
import { SundayComponent } from './menu/sunday/sunday.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { DaysComponent } from './days/days.component';


const routes:Routes=[
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'menu',component: MenuComponent,
   children:[
    {path:'sunday', component: SundayComponent},
    {path:'monday', component: MondayComponent},
    {path:'tuesday', component: TuesdayComponent},
    {path:'wednesday', component: WednesdayComponent},
    {path:'thrusday', component: ThrusdayComponent},
    {path:'friday', component: FridayComponent},
    {path:'saturday', component: SaturdayComponent},
    {path:'cart', component:CartComponent}
   ]},
  {path:'order',component:OrderComponent},
  {path:'cart', component:CartComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    OrderComponent,
    FooterComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThrusdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,
    CartComponent,
    DaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataserviceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
