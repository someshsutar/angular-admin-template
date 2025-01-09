import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  standalone: false,
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent {
  order = { id: '', status: '', date: '' };
  statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];

  constructor(private router: Router) {}

  submitOrder() {
    console.log('Order added:', this.order);
    this.router.navigate(['/orders']);
  }
}
