import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedZodiacComponent } from './nested-zodiac.component';

describe('NestedZodiacComponent', () => {
  let component: NestedZodiacComponent;
  let fixture: ComponentFixture<NestedZodiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedZodiacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedZodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
