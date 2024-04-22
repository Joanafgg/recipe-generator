/** @format */

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ac32e0ate3o6d71438fbfb04d2cec6d9";
  let context =
    "You are a recipes expert and loves to show recent and short recipes. Your mission is to generate the title, the list of ingredients and the steps to do the recipe but each line has to be separate from each other with a <br />, the title has to be in a <h3></h3> element. The steps and the ingredients have to be in a <h4></h4> element. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class=generating>⏳ Generating a recipe with ${instructionsInput.value}...👩‍🍳</div>`

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
