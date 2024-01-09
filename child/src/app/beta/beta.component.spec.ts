import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaComponent } from './beta.component';

describe('BetaComponent', () => {
  let component: BetaComponent;
  let fixture: ComponentFixture<BetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
