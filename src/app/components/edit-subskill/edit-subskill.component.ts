import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subskill } from 'src/app/models/subskill';
import { FormControl, FormGroup } from '@angular/forms';

import { SubskillService } from 'src/app/services/subskill/subskill.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-subskill',
  templateUrl: './edit-subskill.component.html',
  styleUrls: ['./edit-subskill.component.scss']
})
export class EditSubskillComponent implements OnInit{
  subskillForm!: FormGroup;

  
  skill:Subskill ={};

  id:any;
  editData: any;

  levelId:any;

  constructor(
    private service:SubskillService,
    private router:Router,
    private route:ActivatedRoute,
    private subskillsService: SubskillService,

    ) {
    }

    ngOnInit(): void {
   
  
      this.id = this.route.snapshot.params['id']; // Get the id from route params

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
      this.subskillForm = new FormGroup({
        name: new FormControl('')
      });
      this.subskillsService.getSubskillById(this.id).subscribe((res) => {
        this.editData = res;
        console.log(this.editData);

        if (res != null) {
          this.subskillForm.controls['name'].setValue(this.editData.name); // Changed 'firstName' to 'description'
        }
      });
    }
    
  

    editSubskill() {
      console.log(this.subskillForm.value);
    
      // Update the properties of the 'this.skill' object with form values
      this.skill.name = this.subskillForm.get('name')?.value;
    
      this.subskillsService.updateSubskill(this.id, this.skill)
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
