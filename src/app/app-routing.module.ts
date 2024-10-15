import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductModule } from './features/product/product.module';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:'/home', pathMatch:'full'},

  {path:'product', loadChildren:()=>import('./features/product/product.module').then((m) => m.ProductModule)},
  {path:'contact', loadChildren:()=>import('./features/contact/contact.module').then((m) => m.ContactModule)},
  {path:'apropos', loadChildren:()=>import('./features/apropos/apropos.module').then((m) => m.AproposModule)},
  {path:'profile', loadChildren:()=>import('./features/profile/profile.module').then((m) => m.ProfileModule)},


  {path:"**", component: NotFoundComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
