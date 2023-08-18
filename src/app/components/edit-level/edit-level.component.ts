import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.scss']
})
export class EditLevelComponent implements OnInit {

  level: Level = {};
  levelId: any;
  showSuccessMessage = false;

  constructor(
    private service: LevelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.levelId = params.get('id');
      this.service.getLevelById(this.levelId).subscribe({
        next: (result) => {
          this.level = result;
        }
      });
    });
  }

  
  editLevel(event: any) {
    event.preventDefault(); // Prevent the form from submitting as usual
    
    if (this.levelId && this.level) {
      this.service.updateLevel(this.levelId, this.level).subscribe({
        next: (result) => {
          this.showSuccessMessage = true; // Display success popup
        }
      });
    }
  }


  
closePopup() {
  this.showSuccessMessage = false;
  this.router.navigate(['/h/levels']);
}
}
