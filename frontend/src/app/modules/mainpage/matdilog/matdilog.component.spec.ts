import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdilogComponent } from './matdilog.component';

describe('MatdilogComponent', () => {
  let component: MatdilogComponent;
  let fixture: ComponentFixture<MatdilogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatdilogComponent]
    });
    fixture = TestBed.createComponent(MatdilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
