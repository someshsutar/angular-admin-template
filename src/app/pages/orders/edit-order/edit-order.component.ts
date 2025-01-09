import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-order',
  standalone: false,

  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss'
})
export class EditOrderComponent implements OnInit {
  order = { id: '', status: '', date: '' };
  statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      const orderId = this.route.snapshot.paramMap.get('id');

  }

  loadOrder(orderId: string | null) {
    // Simulate loading order from server
    this.order = { id: orderId || '', status: 'Pending', date: '2025-01-01' };
  }

  submitOrder() {
    console.log('Order updated:', this.order);
    this.router.navigate(['/orders']);
  }
}
