import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { NgModule } from '@angular/core';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

