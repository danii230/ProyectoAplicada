import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
  Link: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Sexo', Link: '/dashboard/sexo'},
    {value: 'pizza-1', viewValue: 'Pizza', Link: '/dashboard/trimestre'},
    {value: 'tacos-2', viewValue: 'Tacos', Link: '/dashboard/departamento'},
  ];

  cargarMenu(){
    this.menuService.getMenu().subscribe(data =>{
      console.log(data);
      this.menu = data;
    })
  }
}
