import React, { useEffect, useState } from 'react';

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

const MealComponent = () => {
  const [mealData, setMealData] = useState([]);
  const [searchMeal, setSearch] = useState('');

  console.log(searchMeal);

  useEffect(() => {
    const fetchMealData = async (url) => {
      const response = await fetch(url);
      const { meals } = await response.json();
      setMealData(meals);
    };
    const searchUrl = `${URL}${searchMeal}`;
    fetchMealData(searchUrl);
  }, [searchMeal]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedData = mealData.filter((eachMeal) => eachMeal.idMeal !== id);

    setMealData(updatedData);
    console.log(mealData);
  };

  console.log('mealdata', mealData);
  return (
    <div className="content">
      <input
        type="search"
        name=""
        id=""
        value={searchMeal}
        onChange={handleSearch}
      />
      <div className="container">
        {mealData.map((eachMeal) => {
          const { idMeal, strArea, strCategory, strMeal, strMealThumb } =
            eachMeal;
          return (
            <div className="data">
              <img width={200} height={200} src={strMealThumb} alt="" />
              <p>place: {strArea}</p>
              <p>meal: {strMeal}</p>
              <p>category : {strCategory}</p>
              <button>order</button>
              <button onClick={() => handleDelete(idMeal)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealComponent;
