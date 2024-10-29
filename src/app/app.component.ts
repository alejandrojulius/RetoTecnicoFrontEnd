import { MundocompletoComponent } from './mundocompleto/mundocompleto.component';
import { Component, OnInit } from '@angular/core';
import { PaisesyregionesService } from './paisesyregiones.service';

@Component({
  selector: 'app-paisesyregiones',
  templateUrl: './mundocompleto.component.html',
  styleUrls: ['./mundocompleto.component.css']
})
export class MundocompletoComponent implements OnInit{
  Paisesyregiones: any[] = [];
  paisocontienteSeleccionado: any;

  constructor(private PaisesyregionesService: PaisesyregionesService){}

  ngOnInit(): void {
      this.PaisesyregionesService.buscarPaisoContienete().subscribe(data => this.paisocontienteSeleccionado =data);}
      selecionarPaisoContienete(pais: any): void {
        this.paisocontienteSeleccionado = pais;
      }
}
