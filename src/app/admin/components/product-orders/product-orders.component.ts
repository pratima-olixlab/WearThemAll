import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Orders } from '../../../product';
import { OrderService } from '../../../services/orders.service';


@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.css'],
})
export class ProductOrdersComponent {
  totalAmount: number = 0;
  items: any = [];
  orders: Orders[] = [];
  
  constructor(private orderService: OrderService,private router: Router) {}

  getItemNames(order: Orders): string {
    return order.items.map((item) => item.name).join(', ');
  }

  orders$: Observable<Orders[]>;

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  handleEdit(order: Orders) {
    console.log('Order edited:', order);
  }
  handleAccept(order: Orders) {
    const confirmation = window.confirm('Are you sure you want to accept this order?');
  
    if (confirmation) {
  
      this.orderService.moveOrder(order, 'Accepted');
  
      this.orders = this.orders.filter((o) => o !== order);
    }
  }
  
  handleDecline(order: Orders) {
    const confirmation = window.confirm('Are you sure you want to decline this order?');
  
    if (confirmation) {
  
      this.orderService.moveOrder(order, 'Declined');
  
      this.orders = this.orders.filter((o) => o !== order);
    }
  }
  orderHistory(){
    this.router.navigate(['app-orders-decline']);
  }
  ordersAccepted(){
    this.router.navigate(['app-orders-accepted']);
  }
}
