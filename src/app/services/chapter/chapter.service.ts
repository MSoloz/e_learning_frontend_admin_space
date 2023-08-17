import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http:HttpClient
  ) { }

  getAllChapters() {
    const chaptersUrl = `http://127.0.0.1:8000/api/chapitres/`;
    return this.http.get<Array<Chapter>>(chaptersUrl);
  }

  getChapterById(id:any){

    return this.http.get(`${this.baseUrl}`+'api/chapitres/'+id+'/');
  
    }

  createChapter(chapter: Chapter) {
    const productsUrl = `http://127.0.0.1:8000/api/chapitres/create/`;
    return this.http.post<Chapter>(productsUrl, chapter);
  }

  deleteChapter(id: number) {
    return this.http.delete(`${this.baseUrl}api/chapitres/`+id+'/delete/');
  }

  updateChapter(id:number,chapter:Chapter){

    return this.http.put(`${this.baseUrl}api/chapitres/`+id+'/update/', chapter);
    
   }  
  
}

