import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerOneComponent } from './inner-one.component';

describe('InnerOneComponent', () => {
  let component: InnerOneComponent;
  let fixture: ComponentFixture<InnerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
