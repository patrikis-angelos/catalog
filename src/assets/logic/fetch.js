import serialize from './serialize';

const getData = async (params, from, to) => {
  const {
    q, cuisineType, dishType, mealType,
  } = params;
  const parameters = {
    q,
    cuisineType,
    dishType,
    mealType,
    app_id: process.env.REACT_APP_ID,
    app_key: process.env.REACT_APP_KEY,
    from,
    to,
  };
  const url = serialize('https://api.edamam.com/search?', parameters);
  const response = await fetch(url)
    .then((r) => r.json());
  const foodsArray = [];
  for (let i = 0; i < response.hits.length; i += 1) {
    const {
      label, image, ingredients, cuisineType,
    } = response.hits[i].recipe;
    const id = (response.hits[i].recipe.uri).split('_')[1];
    const cuisine = cuisineType ? cuisineType[0] : '';
    foodsArray.push({
      id,
      title: label,
      image,
      ingredients,
      cuisine,
    });
  }
  return foodsArray;
};

export default getData;
