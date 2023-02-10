import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
    this.metodoget();
    this.postProducts();
    this.updateProducts();
    this.deleteProducts()
  }
  constructor(private http:HttpClient){}
  readonly api = 'https://api.escuelajs.co/api/v1/products'
  metodoget(){
    const api = `${this.api}`
    const e = this.http.get(api).subscribe(e=>{console.log(e)})
  }
  postProducts(){
    const url = 'https://api.escuelajs.co/api/v1/products'
    const data = {
      title: 'Computadora',
      price: 24,
      description:'Equipo Electronico/ Leonardo Bocon',
      images:['https://www.nationalgeographic.com.es/medio/2023/01/12/imagen-de-un-atomo_952cc086_230112124807_1280x988.jpg'],
      categoryId:2
    }
    this.http.post(url,data).subscribe(e=>{console.log(e)})
  }
  updateProducts(){
    const actualizar={
      title :'Zapatos',
      price:23,
      description:'Ropa deportiva / Leonardo'
    }
    const url = 'https://api.escuelajs.co/api/v1/products/1'
    this.http.put(url,actualizar).subscribe(e=>{console.log(e)})
  }
  deleteProducts(){
  const api = 'https://api.escuelajs.co/api/v1/products/6';
  this.http.delete(api).subscribe(e=>{console.log(e)})

  }
}
