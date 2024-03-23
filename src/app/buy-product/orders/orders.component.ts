import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Orders, Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  authStateSubscription: Subscription | null = null;
  totalAmount: number = 0;
  orderId: string='';
  cartItems: Product[];
  alertShown: boolean = false;

  constructor(
    private cartService: CartService,
    private store: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.totalAmount = this.cartService.getTotalAmount();
      this.cartItems = cartItems;
    });
  }

  placeOrder() {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
    this.authStateSubscription = this.afAuth.authState.subscribe((user) => {
      if (user) {        
        // let orderId: string | undefined;
        const order: Orders = {
          status: 'In Progress',
          userId: user.uid,
          userName: user.displayName || user.email,
          items: this.cartItems,
          totalAmount: this.totalAmount,
        };
        this.store
          .collection('orders')
          .add(order)
          .then((docRef) => {
            const orderId = docRef.id;

            // Update the orderId field in your component after getting the ID
            this.orderId = orderId;

            this.cartService.clearCart();

            if (!this.alertShown) {
              alert('Your order is in Progress!');
              this.alertShown = true;

              if (this.authStateSubscription) {
                this.authStateSubscription.unsubscribe();
              }
            }
          })
          .catch((error) => {
            console.error('Error adding order: ', error);
          });
      }
    });
  }
}

