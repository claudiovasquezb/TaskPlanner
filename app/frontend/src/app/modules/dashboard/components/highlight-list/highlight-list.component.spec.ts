import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightListComponent } from './highlight-list.component';

describe('HighlightListComponent', () => {
  let component: HighlightListComponent;
  let fixture: ComponentFixture<HighlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
