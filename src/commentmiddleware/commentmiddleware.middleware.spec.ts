import { CommentmiddlewareMiddleware } from './commentmiddleware.middleware';

describe('CommentmiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new CommentmiddlewareMiddleware()).toBeDefined();
  });
});
