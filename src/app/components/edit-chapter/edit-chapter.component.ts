import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/models/chapter';
import { FormControl, FormGroup } from '@angular/forms';

import { ChapterService } from 'src/app/services/chapter/chapter.service';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss']
})
export class EditChapterComponent implements OnInit{
  chapterForm!: FormGroup;

  
  chapter:Chapter ={};

  id:any;
  editData: any;

  levelId:any;

  constructor(
    private service:ChapterService,
    private router:Router,
    private route:ActivatedRoute,
    private chaptersService: ChapterService,

    ) {
    }

    ngOnInit(): void {
   
  
      this.id = this.route.snapshot.params['id']; // Get the id from route params

      this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
      this.chapterForm = new FormGroup({
        name: new FormControl('')
      });
      this.chaptersService.getChapterById(this.id).subscribe((res) => {
        this.editData = res;
        console.log(this.editData);

        if (res != null) {
          this.chapterForm.controls['name'].setValue(this.editData.name); // Changed 'firstName' to 'description'
        }
      });
    }
    
  

    editChapter() {
      console.log(this.chapterForm.value);
    
      // Update the properties of the 'this.chapter' object with form values
      this.chapter.name = this.chapterForm.get('name')?.value;
    
      this.chaptersService.updateChapter(this.id, this.chapter)
        .subscribe(result => {
          if (result != null) {
            this.router.navigate(['/h/chapters']);
          } else {
            console.log("not found");
            console.log(result);
          }
        });
    }


}
