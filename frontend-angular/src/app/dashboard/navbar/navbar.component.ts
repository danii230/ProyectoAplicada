import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Mantenimiento {
  value: string;
  viewValue: string;
  Link: string
}

interface Reporte {
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

  mantenimientos: Mantenimiento[] = [
    {value: '0', viewValue: 'Sexo', Link: '/dashboard/sexo'},
    {value: '1', viewValue: 'Trimestre', Link: '/dashboard/trimestre'},
    {value: '2', viewValue: 'Departamento', Link: '/dashboard/departamento'},
    {value: '3', viewValue: 'Funcionario', Link: '/dashboard/funcionario'},
    {value: '4', viewValue: 'Transacción', Link: '/dashboard/transaccion'},
  ];

  reportes: Reporte[] = [
    {value: '0', viewValue: 'Solicitudes', Link: '/dashboard/solicitudes-fechas'},
  ];

  cargarMenu(){
    this.menuService.getMenu().subscribe(data =>{
      console.log(data);
      this.menu = data;
    })
  }
}
