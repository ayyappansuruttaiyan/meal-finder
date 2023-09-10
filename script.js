const meals = document.querySelector(".meal");
const mealsCountEl = document.querySelector(".meals-count");
const searchEl = document.getElementById(".search");
const submitEl = document.getElementById("submit");

async function searchMeal(userin) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchEl.value}`
  );
  const data = await response.json();
  const mealsCount = data.meals.length;
  console.log(mealsCount);
  mealsCountEl.innerHTML = `${mealsCount} dishes found`;
  meals.innerHTML = data.meals.map(
    (meal) =>
      `<div> <img width="100px" height="100px"src="${meal.strMealThumb}"</div> <h3>${meal.strMeal}</h3> <button> <a href="">Watch Video<a/></button>`
  );
  //   meals.innerHTML = mealsList;
}

submitEl.addEventListener("click", () => {
  console.log(searchMeal(searchEl.value));
});
