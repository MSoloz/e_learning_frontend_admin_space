import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit{

  modules: Array<Module> = [];

  constructor(
    private service: ModuleService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.service.getAllModules()
      .subscribe({
        next: (result) => {
          this.modules= result;
        }
      });

  }

  deleteModule(id:any) {

    this.service.deleteModule(id)
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
