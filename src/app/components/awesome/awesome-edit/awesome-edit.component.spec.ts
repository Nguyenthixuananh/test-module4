import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeEditComponent } from './awesome-edit.component';

describe('AwesomeEditComponent', () => {
  let component: AwesomeEditComponent;
  let fixture: ComponentFixture<AwesomeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
