import { UnixTimeConverterPipe } from './unix-time-converter.pipe';

describe('UnixTimeConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimeConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
