import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from 'src/app/models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http:HttpClient
  ) { }

  getAllModules() {
    const modulesUrl = `http://127.0.0.1:8000/api/modules/`;
    return this.http.get<Array<Module>>(modulesUrl);
  }

  getModuleById(id:any){

    return this.http.get(`${this.baseUrl}`+'api/modules/'+id+'/');
  
    }

  createModule(module: Module) {
    const productsUrl = `http://127.0.0.1:8000/api/modules/create/`;
    return this.http.post<Module>(productsUrl, module);
  }

  deleteModule(id: number) {
    return this.http.delete(`${this.baseUrl}api/modules/`+id+'/delete/');
  }

  updateModule(id:number,module:Module){

    return this.http.put(`${this.baseUrl}api/modules/`+id+'/update/', module);
    
   }  
  
}

