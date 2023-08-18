import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subskill } from 'src/app/models/subskill';

@Injectable({
  providedIn: 'root'
})
export class SubskillService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http:HttpClient
  ) { }

  getAllSubskills() {
    const subskillsUrl = `http://127.0.0.1:8000/api/subskills/`;
    return this.http.get<Array<Subskill>>(subskillsUrl);
  }

  getSubskillById(id:any){

    return this.http.get(`${this.baseUrl}`+'api/subskills/'+id+'/');
  
    }

  createSubskill(subskill: Subskill) {
    const productsUrl = `http://127.0.0.1:8000/api/subskills/create/`;
    return this.http.post<Subskill>(productsUrl, subskill);
  }

  deleteSubskill(id: number) {
    return this.http.delete(`${this.baseUrl}api/subskills/`+id+'/delete/');
  }

  updateSubskill(id:number,subskill:Subskill){

    return this.http.put(`${this.baseUrl}api/subskills/`+id+'/update/', subskill);
    
   }  
  
}

