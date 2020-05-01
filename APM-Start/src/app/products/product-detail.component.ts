import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'product detail';
  product: IProduct;
  productId: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }

  onBack(): any {
    this.router.navigate(['/products']);
  }
}
