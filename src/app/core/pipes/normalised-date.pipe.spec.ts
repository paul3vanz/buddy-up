import { NormalisedDatePipe } from './normalised-date.pipe';

describe('NormalisedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new NormalisedDatePipe();
    expect(pipe).toBeTruthy();
  });
});
