import { TestBed } from '@angular/core/testing';

import { MathMarkdownService } from './math-markdown.service';

describe('MathMarkdownService', () => {
  let service: MathMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
