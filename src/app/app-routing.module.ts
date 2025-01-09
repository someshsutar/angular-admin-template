import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { AddOrderComponent } from './pages/orders/add-order/add-order.component';
import { EditOrderComponent } from './pages/orders/edit-order/edit-order.component';
import { ViewOrderComponent } from './pages/orders/view-order/view-order.component';

const routes: Routes = [
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/add', component: AddOrderComponent},
  {path: 'orders/edit/:id', component: EditOrderComponent},
  {path: 'orders/view/:id', component: ViewOrderComponent},
  {path: '', redirectTo: '/orders', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
