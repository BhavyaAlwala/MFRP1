
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

 

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

 

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormTableComponent } from './form-table/form-table.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FrontpartComponent } from './frontpart/frontpart.component';

@NgModule({
declarations: [
AppComponent,
HeaderComponent,
CartComponent,
ProductsComponent,
FilterPipe,
LoginComponent,
RegisterComponent,
FormTableComponent,
HomeComponent,
WishlistComponent,
FrontpartComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
MatIconModule,
MatToolbarModule,CarouselModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }