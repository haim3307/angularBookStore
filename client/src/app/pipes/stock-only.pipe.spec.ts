import { StockOnlyPipe } from './stock-only.pipe';

describe('StockOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new StockOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
