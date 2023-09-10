const meals = document.querySelector(".meal");
const mealsCountEl = document.querySelector(".meals-count");
const searchEl = document.getElementById("search");
const submitBtn = document.getElementById("submit");
const searchHeadingEl = document.querySelector(".search-result-heading");

async function searchMeal(value) {
  const userInput = searchEl.value;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
  );

  const data = await response.json();
  const mealsCount = data.meals.length;
  console.log(mealsCount);
  searchHeadingEl.innerHTML = `<h3>Dish includes: ${searchEl.value}</h3>
`;

  mealsCountEl.innerHTML = `<h4>  ${mealsCount} Dishes found </h4>`;

  meals.innerHTML = data.meals.map(
    (meal) =>
      `<div> <img width="100px" height="100px"src="${meal.strMealThumb}"</div> <h3>${meal.strMeal}</h3> <button> <a href="">Watch Video<a/></button>`
  );
  //   meals.innerHTML = mealsList;
}

submitBtn.addEventListener("click", () => {
  searchMeal(searchEl.value);
});
