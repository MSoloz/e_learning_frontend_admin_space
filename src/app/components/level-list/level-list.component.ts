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
  selectedLevelForDeletion: Level | null = null;
  showSuccessMessage = false;

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

  deleteLevel(id: any) {
    this.service.deleteLevel(id).subscribe({
      next: () => {
        this.showSuccessMessage = true; // Set the success message flag to true
        this.levels = this.levels.filter(level => level.id !== id); // Refresh the levels list after deletion
        this.selectedLevelForDeletion = null; // Reset the selected level for deletion
      },
      error: (error) => {
        console.error('Error deleting level:', error);
        // Handle error (e.g., display error message)
      }
    });
  }
  
  


}
