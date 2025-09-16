import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from '../../models/IArticulo';
import { ArticulosService } from '../../services/articulos.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-articulo-detalle',
  imports: [NgClass],
  templateUrl: './articulo-detalle.component.html',
  styleUrl: './articulo-detalle.component.css'
})
export class ArticuloDetalleComponent implements OnInit {
  public articulo?: IArticulo;
  public isStock: boolean = false

  constructor(private activeRoute: ActivatedRoute, private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {

      const articleId = Number(params.get('id'))

      this.articulosService.getArtById(articleId).subscribe((res) => {
        this.articulo = res;
      })
      this.articulo = this.articulosService.getArticle(articleId)

      if (this.articulo) {
        this.isStock = this.articulo.stock > 0;
      }
    });
  }
}
