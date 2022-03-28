import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpartComponent } from './frontpart.component';

describe('FrontpartComponent', () => {
  let component: FrontpartComponent;
  let fixture: ComponentFixture<FrontpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
