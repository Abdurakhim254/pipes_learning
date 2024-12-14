import { PostmiddlewareMiddleware } from './postmiddleware.middleware';

describe('PostmiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new PostmiddlewareMiddleware()).toBeDefined();
  });
});
