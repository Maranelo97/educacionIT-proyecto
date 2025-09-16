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


    console.log(this.articulo)
  }


  saveForm() {
    const name = this.model.name
    const description = this.model.description

    console.log("Valores enviados: ", name, description)

  }
}
