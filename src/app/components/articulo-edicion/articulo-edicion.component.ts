import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from '../../models/IArticulo';
import { mock } from '../../../assets/data/mock';


class FormValues {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public stock: number
  ) {}
}

@Component({
  selector: 'app-articulo-edicion',
  imports: [FormsModule],
  templateUrl: './articulo-edicion.component.html',
  styleUrl: './articulo-edicion.component.css',
})
export class ArticuloEdicionComponent implements OnInit {
  articulo?: IArticulo;
  public articulos: IArticulo[] = mock;

  model = new FormValues(0, '', '', 0);
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.articulo = this.articulos.find(
        (item) => item.id == Number(params.get('id'))
      );

      if (this.articulo) {
        this.model = new FormValues(
          this.articulo.id,
          this.articulo.name,
          this.articulo.description,
          this.articulo.stock
        );
      }
    });
  }


  saveForm(){
    const name =  this.model.name 
    const description = this.model.description
    console.log("Valores enviados: ", name, description)
  }
}
