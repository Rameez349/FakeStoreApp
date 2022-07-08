import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: IProduct
  public productPrice!: number;
  public loadingText: string = "Loading data..Please Wait";
  @Input() id!: number;
  constructor(private route: ActivatedRoute, private productServcie: ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id = params['id'];

        this.productServcie.GetProductDetails(this.id).subscribe(res => {
          this.product = res;
          this.productPrice = this.product.price;
          this.loadingText = "";
        });
      });
  }

  public CalculateDiscount(discountString: string) {
    var discount = parseFloat(discountString);
    if (discount >= 0 && discount <= 100) {
      var discountPrice = this.product.price * (discount / 100);
      this.productPrice = this.product.price - discountPrice;
    } else {
      this.productPrice = this.product.price;
    }

  }

}
