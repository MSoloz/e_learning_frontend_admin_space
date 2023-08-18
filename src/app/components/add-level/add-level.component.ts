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
  showSuccessMessage = false;

  constructor(
    private service:LevelService,
    private router:Router
    ) {

    }

    saveLevel(event: Event) {
      event.preventDefault(); // Prevent the default form submission
      this.service.createLevel(this.level)
        .subscribe({
          next: (result) => {
            this.showSuccessMessage = true;
            // No need to navigate here, as the success message will be shown and user can close the popup
          }
        });
    }
    
  closePopup() {
    this.showSuccessMessage = false;
    this.router.navigate(['/h/levels']);
  }
}
