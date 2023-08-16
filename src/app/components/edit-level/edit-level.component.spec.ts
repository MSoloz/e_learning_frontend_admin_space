import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLevelComponent } from './edit-level.component';

describe('EditLevelComponent', () => {
  let component: EditLevelComponent;
  let fixture: ComponentFixture<EditLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLevelComponent]
    });
    fixture = TestBed.createComponent(EditLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
