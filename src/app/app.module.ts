import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AddOrderComponent } from './pages/orders/add-order/add-order.component';
import { EditOrderComponent } from './pages/orders/edit-order/edit-order.component';
import { ViewOrderComponent } from './pages/orders/view-order/view-order.component';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideMenuComponent,
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    MenubarModule,
    PanelMenuModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
