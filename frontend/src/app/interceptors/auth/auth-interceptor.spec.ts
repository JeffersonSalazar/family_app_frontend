import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor';

describe('AuhtnIntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(service).toBeTruthy();
  });
});
