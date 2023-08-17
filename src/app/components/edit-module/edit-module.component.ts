import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/module';
import { FormControl, FormGroup } from '@angular/forms';

import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit{
  moduleForm!: FormGroup;

  
  module:Module ={};

  id:any;
  editData: any;

  moduleId:any;

  constructor(
    private service:ModuleService,
    private router:Router,
    private route:ActivatedRoute,
    private modulesService: ModuleService,

    ) {
    }

    ngOnInit(): void {
   
  
      this.id = this.route.snapshot.params['id']; // Get the id from route params

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
      this.moduleForm = new FormGroup({
        name: new FormControl('')
      });
      this.modulesService.getModuleById(this.id).subscribe((res) => {
        this.editData = res;
        console.log(this.editData);

        if (res != null) {
          this.moduleForm.controls['name'].setValue(this.editData.name); // Changed 'firstName' to 'description'
        }
      });
    }
    
  

    editModule() {
      console.log(this.moduleForm.value);
    
      // Update the properties of the 'this.level' object with form values
      this.module.name = this.moduleForm.get('name')?.value;
    
      this.modulesService.updateModule(this.id, this.module)
        .subscribe(result => {
          if (result != null) {
            this.router.navigate(['/h/modules']);
          } else {
            console.log("not found");
            console.log(result);
          }
        });
    }


}
