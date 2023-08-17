import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/app/models/chapter';
import { ChapterService } from 'src/app/services/chapter/chapter.service';
import { FormsModule } from '@angular/forms'; // Make sure you import FormsModule here

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent {

  chapter: Chapter = {};

  constructor(
    private service: ChapterService,
    private router: Router
  ) { }

  saveChapter() {
    this.service.createChapter(this.chapter)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/h/chapters']);
        }
      });
  }

}
