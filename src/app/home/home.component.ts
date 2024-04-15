import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

 title ='welcome to VR World '

 productList =[
    {
        'id':1,
        "name":'Oculus Go',
        'image':'../../assets/product1.png',
        'old_price':200,
        'new_price':170,
        'ratings':4.1,
    },
    {
        'id':2,
        "name":'PlayStation VR (PSVR)',
        "image":'../../assets/product2.png',
        'old_price':230,
        'new_price':190,
        'ratings':4.4,
    },
    {
        'id':3,
        "name":'Google Cardboard',
        "image":'../../assets/product3.png',
        'old_price':200,
        'new_price':170,
        'ratings':4.0,
    },
    {
        'id':4,
        "name":' Oculus Quest',
        "image":'../../assets/product5.png',
        'old_price':200,
        'new_price':150,
        'ratings':4.5,
    },
    {
        'id':5,
        "name":'Samsung Gear VR',
        "image":'../../assets/product6.png',
        'old_price':150,
        'new_price':120,
        'ratings':4.2,
    },
]

}



