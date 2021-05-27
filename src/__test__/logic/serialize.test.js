import serialize from '../../assets/logic/serialize';

describe('serialize', () => {
  it('serializes a parameters object to an http link', () => {
    const base = 'https://example.com?';
    const params = {
      example: 'value',
      test: 'key',
    };
    const url = serialize(base, params);
    expect(url).toBe('https://example.com?example=value&test=key&');
  });
  it('ignores empty strings', () => {
    const base = 'https://example.com?';
    const params = {
      example: 'value',
      test: '',
    };
    const url = serialize(base, params);
    expect(url).toBe('https://example.com?example=value&');
  });
  it('ignores empty strings except for q', () => {
    const base = 'https://example.com?';
    const params = {
      q: '',
      test: 'example',
    };
    const url = serialize(base, params);
    expect(url).toBe('https://example.com?q=&test=example&');
  });
});
