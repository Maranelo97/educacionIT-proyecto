import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from '../../models/IArticulo';
import { ArticulosService } from '../../services/articulos.service';


class FormValues {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public stock: number
  ) { }
}

@Component({
  selector: 'app-articulo-edicion',
  imports: [FormsModule],
  templateUrl: './articulo-edicion.component.html',
  styleUrl: './articulo-edicion.component.css',
})
export class ArticuloEdicionComponent implements OnInit {
  articulo?: IArticulo;

  model = new FormValues(0, '', '', 0);
  constructor(private activeRoute: ActivatedRoute, private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const articuloId = Number(params.get('id'))

      this.articulosService.getArtById(articuloId).subscribe((res) => {
        this.articulo = res


        this.model = new FormValues(
          res.id,
          res.name,
          res.description,
          res.stock
        )
      })
    });


  }

  saveForm() {
    const articuloEditado: IArticulo = {
      id: this.model.id,
      name: this.model.name,
      description: this.model.description,
      stock: this.model.stock
    };

    this.articulosService.editArt(this.model.id, articuloEditado).subscribe({
      next: (res) => {
        console.log("Artículo actualizado correctamente:", res);
        // Aquí podrías navegar de vuelta a la lista o mostrar un mensaje
      },
      error: (err) => {
        console.error("Error al actualizar el artículo:", err);
      }
    });
  }
}
