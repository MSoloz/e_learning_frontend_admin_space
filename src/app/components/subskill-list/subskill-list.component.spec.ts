import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubskillListComponent } from './subskill-list.component';

describe('SubskillListComponent', () => {
  let component: SubskillListComponent;
  let fixture: ComponentFixture<SubskillListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubskillListComponent]
    });
    fixture = TestBed.createComponent(SubskillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
