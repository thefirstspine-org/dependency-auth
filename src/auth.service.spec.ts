import {describe, expect, beforeEach, it} from '@jest/globals';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    service = new AuthService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
