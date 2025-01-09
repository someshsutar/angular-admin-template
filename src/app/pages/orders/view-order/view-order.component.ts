import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  standalone: false,

  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss'
})
export class ViewOrderComponent {
  order = { id: '', status: '', date: '' };
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.loadOrder(orderId);
  }

  loadOrder(orderId: string | null) {
    // Simulate loading order from server
    this.order = { id: orderId || '', status: 'Pending', date: '2025-01-01' };
  }
  
}
