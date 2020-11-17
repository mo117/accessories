import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p: number = 1;
  collection: any;

  constructor() { }

  ngOnInit(): void {
    this.collection = [
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/elegant-woman-costume-hat-with-handbag-room_23-2148068414.png",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },


    ];

  }

}
