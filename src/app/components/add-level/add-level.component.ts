import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent {

  level:Level ={};

  constructor(
    private service:LevelService,
    private router:Router
    ) {

    }

  saveLevel() {
    this.service.createLevel(this.level)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/levels']);
        }
      });
  }

}
