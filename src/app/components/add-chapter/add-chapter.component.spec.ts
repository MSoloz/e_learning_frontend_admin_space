import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterComponent } from './add-chapter.component';

describe('AddChapterComponent', () => {
  let component: AddChapterComponent;
  let fixture: ComponentFixture<AddChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChapterComponent]
    });
    fixture = TestBed.createComponent(AddChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
