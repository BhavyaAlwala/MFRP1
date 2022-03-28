import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
@Component({
selector: 'app-wishlist',
templateUrl: './wishlist.component.html',
styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

public products : any = [];
public grandTotal !: number;
constructor(private cartService : CartService) { }

ngOnInit(): void {
this.cartService.getProducts()
.subscribe(res=>{
this.products = res;
this.grandTotal = this.cartService.getTotalPrice();
})
}
removeItem(item: any){
this.cartService.removeCartItem(item);
}
emptycart(){
this.cartService.removeAllCart();
}

wishlist(item: any){
    this.cartService.wishlist(item);
  }
}