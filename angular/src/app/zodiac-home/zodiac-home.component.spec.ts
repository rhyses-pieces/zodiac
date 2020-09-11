import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacHomeComponent } from './zodiac-home.component';

describe('ZodiacHomeComponent', () => {
  let component: ZodiacHomeComponent;
  let fixture: ComponentFixture<ZodiacHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodiacHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
