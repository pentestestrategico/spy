import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PergunteComponent } from './pergunte.component';

describe('PergunteComponent', () => {
  let component: PergunteComponent;
  let fixture: ComponentFixture<PergunteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PergunteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PergunteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
