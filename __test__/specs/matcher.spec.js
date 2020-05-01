import useMultiPossibility from 'use-multi-possibility';
import matcher from '../../src/matcher';

expect.extend(matcher);

describe('.toBeFasterThan', () => {
  it('should pass if the function is faster than the target time', async () => {
    await expect(() => {}).toBeFasterThan(500);
  });

  it('should fail if the function is slower than the target time', () => {
    expect(async () => expect(() => {}).toBeFasterThan(0.01)).rejects.toThrow();
  });

  useMultiPossibility(([arg]) => {
    it(`fails when not given a function (${arg})`, () => {
      expect(async () => expect(arg).toBeFasterThan(1)).rejects.toThrowErrorMatchingSnapshot();
    });
  }, [[undefined, false, [], {}, null, NaN]]);
});
