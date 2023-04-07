import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: Menu[] = [
    {
      title: 'Burger',
      image: '../../assets/burger.jpg',
      description:
        ' Hamburgersa con queso americano y tocino, bañado en una deliciosa salsa BBQ acompañado de rodajas de tomate freso y cebolla recien cortada.',
    },
    {
      title: 'Tacos',
      image: '../../assets/tacos.jpg',
      description:
        'Tacos de carne asada servidos con cebolla y cilantro y salsa a eleccion'
    },
    {
      title: 'Pasta',
      image: '../../assets/pasta.jpg',
      description: 'Pasta Alfredo servida con camarones o pollo' 
    },
    {
      title: 'Sushi',
      image: '../../assets/sushi.jpg',
      description:
        'Sushi con ingredientes originales y tradicionales de japon',
    },
  ];


  constructor() { }

  getMenuList():Menu[]{
    return this.menuList;
  }
}
