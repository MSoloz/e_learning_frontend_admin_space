import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/app/models/module';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent {

  module:Module ={};

  constructor(
    private service:ModuleService,
    private router:Router
    ) {

    }

  saveModule() {
    this.service.createModule(this.module)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/modules']);
        }
      });
  }

}
