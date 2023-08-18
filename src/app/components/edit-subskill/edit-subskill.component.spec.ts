import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubskillComponent } from './edit-subskill.component';

describe('EditSubskillComponent', () => {
  let component: EditSubskillComponent;
  let fixture: ComponentFixture<EditSubskillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSubskillComponent]
    });
    fixture = TestBed.createComponent(EditSubskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
