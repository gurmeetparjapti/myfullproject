import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiformdataComponent } from './apiformdata.component';

describe('ApiformdataComponent', () => {
  let component: ApiformdataComponent;
  let fixture: ComponentFixture<ApiformdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiformdataComponent]
    });
    fixture = TestBed.createComponent(ApiformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
