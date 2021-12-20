import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzePocComponent } from './fuze-poc.component';

describe('FuzePocComponent', () => {
  let component: FuzePocComponent;
  let fixture: ComponentFixture<FuzePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzePocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
