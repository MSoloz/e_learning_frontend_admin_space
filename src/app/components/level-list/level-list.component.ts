import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
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

    this.service.deleteLevel(id).subscribe();
   
  }


}
