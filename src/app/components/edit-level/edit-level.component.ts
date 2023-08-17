import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { FormControl, FormGroup } from '@angular/forms';

import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.scss']
})
export class EditLevelComponent implements OnInit{
  levelForm!: FormGroup;

  
  level:Level ={};

  id:any;
  editData: any;

  levelId:any;

  constructor(
    private service:LevelService,
    private router:Router,
    private route:ActivatedRoute,
    private levelsService: LevelService,

    ) {
    }

    ngOnInit(): void {
   
  
      this.id = this.route.snapshot.params['id']; // Get the id from route params

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
      this.levelForm = new FormGroup({
        name: new FormControl('')
      });
      this.levelsService.getLevelById(this.id).subscribe((res) => {
        this.editData = res;
        console.log(this.editData);

        if (res != null) {
          this.levelForm.controls['name'].setValue(this.editData.name); // Changed 'firstName' to 'description'
        }
      });
    }
    
  

    editLevel() {
      console.log(this.levelForm.value);
    
      // Update the properties of the 'this.level' object with form values
      this.level.name = this.levelForm.get('name')?.value;
    
      this.levelsService.updateLevel(this.id, this.level)
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
