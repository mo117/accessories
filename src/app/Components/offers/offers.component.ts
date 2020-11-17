import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  p: number = 1;
  collection: any;

  constructor() { }

  ngOnInit(): void {
    this.collection = [
      {
        "image":"../../../assets/images/1 (8).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/1 (4).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/1 (14).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",


      },
      {
        "image":"../../../assets/images/1 (16).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (15).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (17).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (18).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (19).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (20).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (4).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (16).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (20).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },



      {
        "image":"../../../assets/images/1 (20).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (16).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (4).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (19).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (18).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },
      {
        "image":"../../../assets/images/1 (17).jpg",
        "icon":"../../../assets/images/Mask Group 3.svg",
        "price": "100 ريال",
        "name":"اسم المنتج",
      },





    ];

  }

}
