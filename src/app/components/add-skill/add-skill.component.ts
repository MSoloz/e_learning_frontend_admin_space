import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill/skill.service';
import { FormsModule } from '@angular/forms'; // Make sure you import FormsModule here

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent {

  skill: Skill = {};

  constructor(
    private service: SkillService,
    private router: Router
  ) { }

  saveSkill() {
    this.service.createSkill(this.skill)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/skills']);
        }
      });
  }

}
