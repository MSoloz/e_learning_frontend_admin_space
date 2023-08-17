import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Level } from 'src/app/models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http:HttpClient
  ) { }

  getAllLevels() {
    const levelsUrl = `http://127.0.0.1:8000/api/niveaux/`;
    return this.http.get<Array<Level>>(levelsUrl);
  }

  getLevelById(id:any){

    return this.http.get(`${this.baseUrl}`+'api/niveaux/'+id+'/');
  
    }

  createLevel(level: Level) {
    const productsUrl = `http://127.0.0.1:8000/api/niveaux/create/`;
    return this.http.post<Level>(productsUrl, level);
  }

  deleteLevel(id: number) {
    return this.http.delete(`${this.baseUrl}api/niveaux/`+id+'/delete/');
  }

  updateLevel(id:number,level:Level){

    return this.http.put(`${this.baseUrl}api/niveaux/`+id+'/update/', level);
    
   }  
  
}

