import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import { DataService } from "../data.service";


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  public currentProduct: Product = null;


public list: Product[] = [];


  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.getProducts().subscribe(
      (products: Product[]) => {
        this.list = products;
      }
    );
  }


  public showProductDetail(product: Product): void {
    this.currentProduct = product;
  }

}