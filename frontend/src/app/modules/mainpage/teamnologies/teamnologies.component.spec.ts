import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnologiesComponent } from './teamnologies.component';

describe('TeamnologiesComponent', () => {
  let component: TeamnologiesComponent;
  let fixture: ComponentFixture<TeamnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamnologiesComponent]
    });
    fixture = TestBed.createComponent(TeamnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
