import { TestBed } from '@angular/core/testing';

import { AuthGuard as AuthGuard } from './auth.guard';

describe('AutoGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
