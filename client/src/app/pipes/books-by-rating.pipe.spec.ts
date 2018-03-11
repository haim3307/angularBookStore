import { BooksByRatingPipe } from './books-by-rating.pipe';

describe('BooksByRatingPipe', () => {
  it('create an instance', () => {
    const pipe = new BooksByRatingPipe();
    expect(pipe).toBeTruthy();
  });
});
