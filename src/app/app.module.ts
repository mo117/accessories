import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { OffersComponent } from './Components/offers/offers.component';
import { NewaComponent } from './Components/newa/newa.component';
import { PartnersComponent } from './Components/partners/partners.component';
import { HomeComponent } from './Components/home/home.component';
import { from } from 'rxjs';
import { FooterComponent } from './Components/footer/footer.component';
import { BackgroundComponent } from './Components/background/background.component';
import { ServicesComponent } from './Components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProductsComponent,
    OffersComponent,
    NewaComponent,
    PartnersComponent,
    HomeComponent,
    FooterComponent,
    BackgroundComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
