function generateRecipe(event) {
    event.preventDefault();

    new Typewriter("#recipe", {
      strings: "Carrot",
        autoStart: true,
        delay: 20,
      cursor: null,
    });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);