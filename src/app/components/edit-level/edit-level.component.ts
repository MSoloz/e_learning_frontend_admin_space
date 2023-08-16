import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.scss']
})
export class EditLevelComponent implements OnInit{

  
  level:Level ={};

  id:any;

  levelId:any;

  constructor(
    private service:LevelService,
    private router:Router,
    private route:ActivatedRoute
    ) {

    }

    ngOnInit(): void {

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
  

      }
  

  editLevel() {
    this.service.updateLevel(this.id,this.level)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/levels']);
        }
      });
  }


}
