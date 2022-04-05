import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionFormComponent } from './election-form.component';

describe('ElectionFormComponent', () => {
  let component: ElectionFormComponent;
  let fixture: ComponentFixture<ElectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
