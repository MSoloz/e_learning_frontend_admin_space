import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { FormControl, FormGroup } from '@angular/forms';

import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit{
  skillForm!: FormGroup;

  
  skill:Skill ={};

  id:any;
  editData: any;

  levelId:any;

  constructor(
    private service:SkillService,
    private router:Router,
    private route:ActivatedRoute,
    private skillsService: SkillService,

    ) {
    }

    ngOnInit(): void {
   
  
      this.id = this.route.snapshot.params['id']; // Get the id from route params

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
      this.skillForm = new FormGroup({
        name: new FormControl('')
      });
      this.skillsService.getSkillById(this.id).subscribe((res) => {
        this.editData = res;
        console.log(this.editData);

        if (res != null) {
          this.skillForm.controls['name'].setValue(this.editData.name); // Changed 'firstName' to 'description'
        }
      });
    }
    
  

    editSkill() {
      console.log(this.skillForm.value);
    
      // Update the properties of the 'this.skill' object with form values
      this.skill.name = this.skillForm.get('name')?.value;
    
      this.skillsService.updateSkill(this.id, this.skill)
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
