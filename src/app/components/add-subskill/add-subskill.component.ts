import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subskill } from 'src/app/models/subskill';
import { SubskillService } from 'src/app/services/subskill/subskill.service';
import { FormsModule } from '@angular/forms'; // Make sure you import FormsModule here

@Component({
  selector: 'app-add-subskill',
  templateUrl: './add-subskill.component.html',
  styleUrls: ['./add-subskill.component.scss']
})
export class AddSubskillComponent {

  subskill: Subskill = {};

  constructor(
    private service: SubskillService,
    private router: Router
  ) { }

  saveSubskill() {
    this.service.createSubskill(this.subskill)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/subskills']);
        }
      });
  }

}
