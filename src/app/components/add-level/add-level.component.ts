import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { FormControl, FormGroup } from '@angular/forms';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent {
  levelForm!: FormGroup;

  level:Level ={};

  constructor(
    private service:LevelService,
    private router:Router
    ) {

    }
    ngOnInit(): void {
      this.levelForm = new FormGroup({
        name: new FormControl(''),
      });
    }

  saveLevel() {
    const formData = new FormData();

    formData.append('name', this.levelForm.get('name')?.value);
    this.service.createLevel(this.level)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/levels']);
        }
      });
  }

}
