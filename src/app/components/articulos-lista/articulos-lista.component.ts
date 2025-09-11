import { Component, OnInit } from '@angular/core';
import { IArticulo } from '../../models/IArticulo';
import { mock } from '../../../assets/data/mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulos-lista',
  imports: [CommonModule],
  templateUrl: './articulos-lista.component.html',
  styleUrl: './articulos-lista.component.css'
})
export class ArticulosListaComponent implements OnInit {
  articulo!: IArticulo; 
  public descripcion: string = "Descripcion placeholder"
  items: IArticulo[] = [];

  ngOnInit(): void {

    this.populateItems()
  }

  populateItems(){
    for(let i = 0; i < mock.length; i++){
      this.items.push(mock[i])
    }
  }

    onSelect(articulo: IArticulo)
  {
    console.log(articulo)
  }
}
