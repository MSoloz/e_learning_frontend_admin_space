import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http:HttpClient
  ) { }

  getAllSkills() {
    const skillsUrl = `http://127.0.0.1:8000/api/skills/`;
    return this.http.get<Array<Skill>>(skillsUrl);
  }

  getSkillById(id:any){

    return this.http.get(`${this.baseUrl}`+'api/skills/'+id+'/');
  
    }

  createSkill(module: Skill) {
    const productsUrl = `http://127.0.0.1:8000/api/skills/create/`;
    return this.http.post<Skill>(productsUrl, module);
  }

  deleteSkill(id: number) {
    return this.http.delete(`${this.baseUrl}api/skills/`+id+'/delete/');
  }

  updateSkill(id:number,module:Skill){

    return this.http.put(`${this.baseUrl}api/skills/`+id+'/update/', module);
    
   }  
  
}

