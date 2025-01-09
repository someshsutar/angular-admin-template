import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: false,
  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  filters = { orderId: '', status: '' };
  statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
  orders =[
    {id:'001', status: 'Pending', date: '2021-01-01'},
    {id:'002', status: 'Shipped', date: '2021-01-02'},
    {id:'003', status: 'Delivered', date: '2021-01-03'},
    {id:'004', status: 'Cancelled', date: '2021-01-04'},
    {id:'005', status: 'Pending', date: '2021-01-05'},
    {id:'006', status: 'Shipped', date: '2021-01-06'},
    {id:'007', status: 'Delivered', date: '2021-01-07'},
    {id:'008', status: 'Cancelled', date: '2021-01-08'},
    {id:'009', status: 'Pending', date: '2021-01-09'},
    {id:'010', status: 'Shipped', date: '2021-01-10'},
    {id:'011', status: 'Delivered', date: '2021-01-11'},
    {id:'012', status: 'Cancelled', date: '2021-01-12'},
    {id:'013', status: 'Pending', date: '2021-01-13'},
    {id:'014', status: 'Shipped', date: '2021-01-14'},
    {id:'015', status: 'Delivered', date: '2021-01-15'},
    {id:'016', status: 'Cancelled', date: '2021-01-16'},
  ];

  applyFilters() {
    console.log(this.filters);
  }

  viewOrder(order: any) {
    console.log('Viewing order:', order);
  }

  editOrder(order: any) {
    console.log('Editing order:', order);
  }

  deleteOrder(order: any) {
    console.log('Deleting order:', order);
  }

}
