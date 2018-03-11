import { ByLetterPipe } from './by-letter.pipe';

describe('ByLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new ByLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
