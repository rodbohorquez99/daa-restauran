import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu.model';
import { MenuService } from '../_services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList: Menu[] = [];

  constructor(private menuService: MenuService){}
ngOnInit(): void {
  this.menuList = this.menuService.getMenuList();
}

}
