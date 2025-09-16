import { Injectable } from '@angular/core';
import { IArticulo } from '../models/IArticulo';
import { mock } from '../../assets/data/mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articles: IArticulo [] = [...mock]
  
  constructor(private client: HttpClient) { }

  getArticles(){
    return this.articles;
  }


  getArticle(id: number): IArticulo | undefined {
    return this.articles.find(article => article.id === id);
  }

  getArt():Observable<IArticulo[]>{
    return this.client.get<IArticulo[]>(environment.api)
  }

   getArtById(id: number):Observable<IArticulo>{
    return this.client.get<IArticulo>(`${environment.api}/${id}`)
  }

  /*
  editArt(id:number, name: string):Observable<IArticulo>{
    return this.client.put<IArticulo>, name(`${environment.api}/${id}`)
  } */
}
