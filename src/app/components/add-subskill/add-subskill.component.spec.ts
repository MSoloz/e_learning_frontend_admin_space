import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubskillComponent } from './add-subskill.component';

describe('AddSubskillComponent', () => {
  let component: AddSubskillComponent;
  let fixture: ComponentFixture<AddSubskillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubskillComponent]
    });
    fixture = TestBed.createComponent(AddSubskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
