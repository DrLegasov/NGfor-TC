import { TestBed } from '@angular/core/testing';

import { CommentShowService } from './comment-show.service';

describe('CommentShowService', () => {
  let service: CommentShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
