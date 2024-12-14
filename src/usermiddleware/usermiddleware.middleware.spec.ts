import { UsermiddlewareMiddleware } from './usermiddleware.middleware';

describe('UsermiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new UsermiddlewareMiddleware()).toBeDefined();
  });
});
