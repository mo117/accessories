import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { NewaComponent } from './Components/newa/newa.component';
import { OffersComponent } from './Components/offers/offers.component';
import { PartnersComponent } from './Components/partners/partners.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [

{path : "" , component:HomeComponent},
{path: "about" , component:AboutComponent},
{path: "products" , component:ProductsComponent},
{path: "offers" , component:OffersComponent},
{path: "newa" , component:NewaComponent},
{path: "partners" , component:PartnersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
