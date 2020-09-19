import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourZodiacComponent } from './your-zodiac.component';

describe('YourZodiacComponent', () => {
  let component: YourZodiacComponent;
  let fixture: ComponentFixture<YourZodiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourZodiacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourZodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
