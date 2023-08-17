import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill/skill.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit{

  skills: Array<Skill> = [];
  pageSize: number = 6;
  currentPage: number = 0;
  constructor(
    private service: SkillService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loadSkills(this.currentPage);

  }
  ONpageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadSkills(this.currentPage);
  }
  loadSkills(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.service.getAllSkills()
      .subscribe({
        next: (result) => {
          this.skills = result.slice(startIndex, endIndex);
        }
      });
  }

  deleteSkill(id:any) {

    this.service.deleteSkill(id)
    .subscribe(result => {
      if (result != null) {
        this.router.navigate(['/h/skills']);
      } else {
        console.log("not found");
        console.log(result);
      }
    });
  }


}
