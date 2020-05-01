import { ProductService } from './product.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Vuong Product List';
  isShowImage = true;

  filterContent = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (products) => (this.products = products),
    });
  }

  toggleShowingImage(): void {
    this.isShowImage = !this.isShowImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Vuong Product List: ' + message;
  }
}
