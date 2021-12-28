import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeDeleteComponent } from './awesome-delete.component';

describe('AwesomeDeleteComponent', () => {
  let component: AwesomeDeleteComponent;
  let fixture: ComponentFixture<AwesomeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
