import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss']
})
export class LevelListComponent implements OnInit{

  levels: Array<Level> = [];

  constructor(
    private service: LevelService,
    private router:Router,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.service.getAllLevels()
      .subscribe({
        next: (result) => {
          this.levels= result;
        }
      });

  }

  deleteLevel(id:any) {

    this.service.deleteLevel(id)
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
