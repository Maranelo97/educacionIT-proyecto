import { Component, OnInit } from '@angular/core';
import { IArticulo } from '../../models/IArticulo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './articulos-lista.component.html',
  styleUrl: './articulos-lista.component.css'
})
export class ArticulosListaComponent implements OnInit {
  articulo!: IArticulo;
  public descripcion: string = "Lista de Articulos"
  items: IArticulo[] = [];

  constructor(private articulosService: ArticulosService) {
  }
  ngOnInit(): void {
    this.articulosService.getArt().subscribe(
      (res) => {
        this.items.push(...res)
      }
    )
  }

  onSelect(articulo: IArticulo) {
    console.log(articulo)
  }
}
