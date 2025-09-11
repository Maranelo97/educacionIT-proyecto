import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from '../../models/IArticulo';

@Component({
  selector: 'app-articulo-detalle',
  imports: [],
  templateUrl: './articulo-detalle.component.html',
  styleUrl: './articulo-detalle.component.css'
})
export class ArticuloDetalleComponent implements OnInit {
  public articulo: IArticulo = null;

  constructor(private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    
  }
}
