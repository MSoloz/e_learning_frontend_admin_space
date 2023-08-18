import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from 'src/app/services/module/module.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules: Array<Module> = [];
  pageSize: number = 6;
  currentPage: number = 0;
  totalItems: number = 0;

  constructor(
    private service: ModuleService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadModules(this.currentPage);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadModules(this.currentPage);
  }

  loadModules(pageIndex: number) {
    this.service.getAllModules().subscribe({
      next: (result) => {
        this.totalItems = result.length;
        const startIndex = pageIndex * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.modules = result.slice(startIndex, endIndex);
      }
    });
  }

  deleteModule(id: any) {
    this.service.deleteModule(id).subscribe(result => {
      if (result != null) {
        this.router.navigate(['/h/levels']);
      } else {
        console.log("not found");
        console.log(result);
      }
    });
  }
}
