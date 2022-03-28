// import { Component, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { CartComponent } from './components/cart/cart.component';
// import { ProductsComponent } from './components/products/products.component';
// import { HeaderComponent } from './components/header/header.component';

// const routes: Routes = [
//   {path:'', redirectTo:'app-products',pathMatch:'full'},
//   {path:'app-products', component: ProductsComponent},
//   {path:'app-header', component: HeaderComponent},
//   {path:'cart', component: CartComponent},
//   {path:'app-register', component: RegisterComponent},
//   {path:'app-login', component: LoginComponent},
 
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { FormTableComponent } from './form-table/form-table.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FrontpartComponent } from './frontpart/frontpart.component';

const routes: Routes = [
{path:'', redirectTo:'app-frontpart',pathMatch:'full'},
{path:'app-products', component: ProductsComponent},
{path:'app-header', component: HeaderComponent},
{path:'cart', component: CartComponent},
{path:'app-register', component: RegisterComponent},
{path:'app-login', component: LoginComponent},
{path:'wishlist',component:WishlistComponent},
{path:'home',component:HomeComponent},
{path:'formTable/:_id',component:FormTableComponent},
{path:'app-frontpart',component:FrontpartComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }