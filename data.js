document.getElementById('searchButton').addEventListener('click', function(){
    let foodSearchBar =document.getElementById('foodSearch').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearchBar}`)
    .then(response=> response.json())
    .then(data=>displayfood(data.meals))
    
}) 
const displayfood = foods =>{
    const TouchDiv = document.getElementById('food-show');
  for (let i = 0; i < foods.length; i++) {
      const mealss = foods[i];
      const CreateDiv = document.createElement('div');
      CreateDiv.className="mealDivClass";
      const mealInfo = `
      <h2>${mealss.strMeal}</h2>
      <img src="${mealss.strMealThumb}" onclick="foodDetails('${mealss.idMeal}')";> 
      <h4 onclick="foodDetails('${mealss.idMeal}')";>${mealss.strMeal}</h4>
      `
      CreateDiv.innerHTML = mealInfo;
      TouchDiv.appendChild(CreateDiv);  
  }
}

const foodDetails = foodName =>{
  const foodSerachBar = document.getElementById('food-show');
  foodSerachBar.style.display= 'none';
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodName}`)
  .then(res=> res.json())
  .then(data=>foodsDetailsShowing(data));
  
}

const foodsDetailsShowing = foodAllDetails =>{
 const foood = foodAllDetails.meals[0];
 const singleFoodsDetails = document.getElementById('single-food-details');
 const createSingleDeteils = document.createElement('div');

 createSingleDeteils.className ="Single-post-details";

  const singleDetails = `
  <img src = "${foood.strMealThumb}">
  <h2>${foood.strArea}</h2>
    <h3>${foood.strMeal}</h3>
    <h3>${foood.strArea} Dish</h3>
    <h3>Category: ${foood.strCategory}</h3>
    <h3>Ingredient : <h3>
    <ul>
    <h4>${foood.strIngredient1}</h4>
    <h4>${foood.strIngredient2}</h4>
    <h4>${foood.strIngredient3}</h4>
    <h4>${foood.strIngredient4}</h4>
    <h4>${foood.strIngredient5}</h4>
    </ul>
  `
  
  createSingleDeteils.innerHTML =singleDetails;

  singleFoodsDetails.appendChild(createSingleDeteils);
  
}