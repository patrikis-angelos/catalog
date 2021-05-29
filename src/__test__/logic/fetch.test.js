import getData from '../../assets/logic/fetchData';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      hits: [
        {
          recipe: {
            label: '',
            image: '',
            ingredients: '',
            cuisineType: '',
            dishType: '',
            mealType: '',
            url: '',
            uri: '12345_12345',
          },
        },
      ],
    }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('getData', () => {
  it('fetches data from the edamam api and return then in an array', async () => {
    const params = {
      q: 'fish',
      cuisineType: '',
      dishType: '',
      mealType: '',
    };
    const data = await getData(params, 0, 1);
    expect(data[0].id).toBe('12345');
    expect(data[0].title).toBe('');
  });
  it('returns an empty array if it fails to fetch the data', async () => {
    fetch.mockRejectedValueOnce();
    const params = {
      q: 'fish',
      cuisineType: '',
      dishType: '',
      mealType: '',
    };
    const data = await getData(params, 0, 1);
    expect(data).toStrictEqual([]);
  });
});
