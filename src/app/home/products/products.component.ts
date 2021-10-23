import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  projectsUrl = 'https://flogramming.herokuapp.com/api/products'
  products: Products[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Products[]>(this.projectsUrl).subscribe((products: Products[]) => this.products = products);
  }
  isPhotoValid(productPhoto: any): boolean {
    return productPhoto !== null || productPhoto.length !== 0;
  }

}
