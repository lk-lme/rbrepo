import getNextArrItem from '.';

describe('getNextArrItem', () => {
  const arr = ['a', 'b', 'c'];

  it('returns the next forward item', () => {
    expect(getNextArrItem('forward', arr, 'a')).toBe('b');
    expect(getNextArrItem('forward', arr, 'b')).toBe('c');
  });

  it('returns the next backward item', () => {
    expect(getNextArrItem('backward', arr, 'b')).toBe('a');
    expect(getNextArrItem('backward', arr, 'c')).toBe('b');
  });

  it('loops around going forward', () => {
    expect(getNextArrItem('forward', arr, 'c')).toBe('a');
  });

  it('loops around going backward', () => {
    expect(getNextArrItem('backward', arr, 'a')).toBe('c');
  });
});
