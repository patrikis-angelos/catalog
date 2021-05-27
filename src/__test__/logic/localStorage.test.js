import storage from '../../assets/logic/localStorage';

window.localStorage = { filters: {} };

describe('save', () => {
  it('stringifies and saves the data in the filters property', () => {
    expect(localStorage.filters).not.toBeTruthy();
    const data = { q: 'filter1', cuisineType: 'filter2' };
    storage.save(data);
    expect(localStorage.filters).toBeTruthy();
  });
});

describe('load', () => {
  it('return the data in the local storage parsed', () => {
    const filters = storage.load();
    expect(filters.q).toBe('filter1');
    expect(filters.cuisineType).toBe('filter2');
  });
});
