import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReigesterComponent } from './reigester.component';

describe('ReigesterComponent', () => {
  let component: ReigesterComponent;
  let fixture: ComponentFixture<ReigesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReigesterComponent]
    });
    fixture = TestBed.createComponent(ReigesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
