import { ProductDetailGuard } from './products/product-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
