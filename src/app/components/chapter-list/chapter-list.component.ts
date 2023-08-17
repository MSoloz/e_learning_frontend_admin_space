import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/services/chapter/chapter.service';
import { RouterModule } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit{

  chapters: Array<Chapter> = [];
  pageSize: number = 6;
  currentPage: number = 0;
  constructor(
    private service: ChapterService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loadChapters(this.currentPage);


  }
  OnPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadChapters(this.currentPage);
  }
  loadChapters(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.service.getAllChapters()
      .subscribe({
        next: (result) => {
          this.chapters = result.slice(startIndex, endIndex);
        }
      });
  }
  deleteChapter(id:any) {

    this.service.deleteChapter(id)
    .subscribe(result => {
      if (result != null) {
        this.router.navigate(['/h/chapters']);
      } else {
        console.log("not found");
        console.log(result);
      }
    });
  }


}
