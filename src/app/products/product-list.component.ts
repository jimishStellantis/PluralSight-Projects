import { Component, OnInit } from "@angular/core";
import { IProduct, IProductHeader, IProductPage } from "./product.interface";
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
    imageWidth: 30,
    btnWidth: 125,
    showImage: false,
    listFilter: ""
  }

  ngOnInit(): void {
    // defind listFilter Property 
    this.listFilter = 'cart';
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
  ]

  //listFilter: string = 'cart';      //we have remove this variable for use in getter & setter properties 
  private _listFilter: string = '';

  //  define getter with using get keywork followed by the name of property with parenthesis
  get listFilter():string{    // we specify the proerty datatype i.e. :string
    // body of the getter includes the code to process the property value before returning it
    return this._listFilter;  // return the value of the backing variable
  }

  // define the setter
  // setter has NO return value
  // setter is executed anytime a value is assigned to the associated property
  set listFilter(value:string){
    // setter body to perform the operation when the property is changed such as filter out list of products 
    this._listFilter = value;   // we set the value in our backing variable
    // we add the code below
    console.log("In setter: ", value);
    
  }

  // create Arrow function, which filter the products array
  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

  // toggleImage(): void{
  //   this.productPageInfo.showImage= !this.productPageInfo.showImage;
  // }
}