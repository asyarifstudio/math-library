import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathMarkdownComponent } from './math-markdown.component';

describe('MathMarkdownComponent', () => {
  let component: MathMarkdownComponent;
  let fixture: ComponentFixture<MathMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
