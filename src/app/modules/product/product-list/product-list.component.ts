import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private allProducts!: IProduct[];
  public products: IProduct[] = new Array(6);
  //@Output() changePage = new EventEmitter<any>(true);

  @Input() pageNumber: number = 1;
  start: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(res => {
      this.allProducts = res;
      for (let i = 0; i < 6; i++) {
        this.products[i] = this.allProducts[this.start + i];
      }
      this.start = this.pageNumber * 6;
      console.log(this.start);
    });
  }

  public Next() {
    if (this.start < this.allProducts.length) {
      this.pageNumber = this.pageNumber + 1;
      this.products = [];
      this.products = new Array(6);
      for (let i = 0; i < 6; i++) {
        if ((this.start + i) < this.allProducts.length)
          this.products[i] = this.allProducts[this.start + i];
      }
      this.start = this.pageNumber * 6;
    }
  }

  public Prev() {
    if (this.start > 0 && this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.start = (this.pageNumber - 1) * 6;
      this.products = [];
      this.products = new Array(6);
      for (let i = 0; i < 6; i++) {
        if ((this.start + i) < this.allProducts.length)
          this.products[i] = this.allProducts[this.start + i];
      }
    }
  }
}
