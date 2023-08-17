import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/services/level/level.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss']
})
export class LevelListComponent implements OnInit{

  levels: Array<Level> = [];
  pageSize: number = 6;
  currentPage: number = 0;
  constructor(
    private service: LevelService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loadLevels(this.currentPage);

  }
  ONPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadLevels(this.currentPage);
  }
  loadLevels(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.service.getAllLevels()
      .subscribe({
        next: (result) => {
          this.levels = result.slice(startIndex, endIndex);
        }
      });
  }

  deleteLevel(id:any) {

    this.service.deleteLevel(id)
    .subscribe(result => {
      if (result != null) {
        this.router.navigate(['/h/levels']);
      } else {
        console.log("not found");
        console.log(result);
      }
    });
  }


}
