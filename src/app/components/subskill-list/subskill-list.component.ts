import { Component, OnInit } from '@angular/core';
import { Subskill } from 'src/app/models/subskill';
import { ActivatedRoute, Router } from '@angular/router';
import { SubskillService } from 'src/app/services/subskill/subskill.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-subskill-list',
  templateUrl: './subskill-list.component.html',
  styleUrls: ['./subskill-list.component.scss']
})
export class SubskillListComponent implements OnInit{

  subskills: Array<Subskill> = [];


  pageSize: number = 6;
  currentPage: number = 0;
  totalItems: number = 0;

  constructor(
    private service: SubskillService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loadSubskills(this.currentPage);

  }
  ONpagechange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadSubskills(this.currentPage);
  }
  loadSubskills(pageIndex: number) {
    this.service.getAllSubskills().subscribe({
      next: (result) => {
        this.totalItems = result.length;
        const startIndex = pageIndex * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.subskills = result.slice(startIndex, endIndex);
      }
    });
  }

  deleteSubskill(id:any) {

    this.service.deleteSubskill(id)
    .subscribe(result => {
      if (result != null) {
        this.router.navigate(['/h/subskills']);
      } else {
        console.log("not found");
        console.log(result);
      }
    });
  }


}
