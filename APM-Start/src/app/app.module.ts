import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    ProductModule,
    HttpClientModule,
    RouterModule.forRoot([
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
