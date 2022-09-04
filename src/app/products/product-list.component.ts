import { Component, OnInit } from "@angular/core";
import { IProduct, IProductHeader, IProductPage } from "./product.interface";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // styles:[
  //   'tHead {color: #337AB7;}'
  // ]
  styleUrls: [
    './product-list.component.scss'  //we can add multiple stylesheets separated by commas
  ]
})

export class ProductListComponent implements OnInit {
  productPageInfo: IProductPage = {
    pageTitle: "Product List",
    imageWidth: 25,
    btnWidth: 125,
    showImage: true,
    listFilter: ""
  }

  constructor(private productService: ProductService){    
  }

  onRatingclicked(message: any): void{
    this.productPageInfo.pageTitle = 'Product List: ' + message;
  }


  performFilter(filterBy: string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: IProduct) => 
      products.productName.toLocaleLowerCase().includes(filterBy))
  }
  productsHeadings: IProductHeader[] = [
    {
      "tHeadings": "Product Name"
    },
    {
      "tHeadings": "Product Code"
    },
    {
      "tHeadings": "Availability"
    },
    {
      "tHeadings": "Product Price"
    },
    {
      "tHeadings": "Star Ratings"
    }
  ];

  //listFilter: string = 'cart';      //we have remove this variable for use in getter & setter properties 
  private _listFilter: string = '';

  /**
   * define getter with using get keywork followed by the name of property with parenthesis
  */
  get listFilter():string{    // we specify the proerty datatype i.e. :string
    // body of the getter includes the code to process the property value before returning it
    return this._listFilter;  // return the value of the backing variable
  }

  /**
   *  define the setter
      setter has NO return value
      setter is executed anytime a value is assigned to the associated property
   */
  
  set listFilter(value:string){
    // setter body to perform the operation when the property is changed such as filter out list of products 
    this._listFilter = value;   // we set the value in our backing variable
    // we add the code below
    console.log("In setter: ", value);
    this.filteredProducts = this.performFilter(value);    
  }

  

  // create Arrow function, which filter the products array
  filteredProducts: IProduct[] = [];
  
  // toggleImage(): void{
  //   this.productPageInfo.showImage= !this.productPageInfo.showImage;
  // }


  products: IProduct[] = [];
  
  ngOnInit(): void {
    // Set the product property
    this.products = this.productService.getProduct();

    // Set the filterProducts
    this.filteredProducts = this.products;
    
    // Remove default list filter
    // defind listFilter Property 
    // this.listFilter = 'cart';
  }
}