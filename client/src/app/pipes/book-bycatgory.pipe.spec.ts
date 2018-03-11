import { BooksByCategoryPipe } from './book-bycatgory.pipe';

describe('BooksByCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new BooksByCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
