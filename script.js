const meals = document.querySelector(".meal");
const mealsCountEl = document.querySelector(".meals-count");
const noInputEl = document.querySelector(".no-input");
const searchEl = document.getElementById("search");
const submitBtn = document.getElementById("submit");
const searchHeadingEl = document.querySelector(".search-result-heading");
const mealsContainerEl = document.querySelector(".meals-container");
async function searchMeal(e) {
  const userInput = searchEl.value;
  if (userInput === "") {
    noInputEl.innerHTML = "No Input found";
  } else {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    );

    const data = await response.json();
    if (data.meals === null) {
      noInputEl.innerHTML = "No dish found";
      mealsContainerEl.innerHTML = "";
      searchHeadingEl.innerHTML = "";
      mealsCountEl.innerHTML = "";
    } else {
      const mealsCount = data.meals.length;
      console.log(mealsCount);
      searchHeadingEl.innerHTML = `<h3>Dish includes: ${searchEl.value}</h3>
`;
      mealsCountEl.innerHTML = `<h4>  ${mealsCount} Dishes found </h4>`;
      mealsContainerEl.innerHTML = data.meals
        .map(
          (meal) =>
            `
          <div class="meal"> 
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>${meal.strMeal}</h3> 
          <button> <a href="">Watch Video<a/></button>
          </div> 
          `
        )
        .join("");

      noInputEl.innerHTML = "";
    }
  }
}

submitBtn.addEventListener("click", () => {
  searchMeal(searchEl.value);
});
