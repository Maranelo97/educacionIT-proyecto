import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from '../../models/IArticulo';
import { mock } from '../../../assets/data/mock';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-articulo-detalle',
  imports: [NgClass],
  templateUrl: './articulo-detalle.component.html',
  styleUrl: './articulo-detalle.component.css'
})
export class ArticuloDetalleComponent implements OnInit {
  public articulo?: IArticulo;
  public articulos: IArticulo [] = mock
  public isStock: boolean = false

  constructor(private activeRoute: ActivatedRoute){}

 ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.articulo = this.articulos.find(
        (item) => item.id == Number(params.get('id'))
      );
      if (this.articulo) {
        this.isStock = this.articulo.stock > 0;
      }
    });
  }
}
