import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/app/models/module';
import { FormControl, FormGroup } from '@angular/forms';

import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent {
  moduleForm!: FormGroup;

  module:Module ={};

  constructor(
    private service:ModuleService,
    private router:Router
    ) {

    }
    ngOnInit(): void {
      this.moduleForm = new FormGroup({
        name: new FormControl(''),
      });
    }
  saveModule() {
    const formData = new FormData();

    formData.append('name', this.moduleForm.get('name')?.value);
    this.service.createModule(this.module)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/modules']);
        }
      });
  }

}
