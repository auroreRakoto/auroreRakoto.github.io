/* ============================================================ */
/* RECIPES DATABASE                                             */
/* ============================================================ */

const recipes = [

```
{
    id: 1,
    name: "Poulet curry coco",
    category: "Asian",
    time: 30,
    difficulty: "Easy",
    ingredients: [
        "2 chicken breasts",
        "200 ml coconut milk",
        "2 tsp curry powder",
        "1 onion",
        "Rice",
        "Salt and pepper"
    ],
    instructions: [
        "Cut the chicken into pieces.",
        "Slice the onion.",
        "Cook the onion in a pan for 3 minutes.",
        "Add the chicken and curry powder.",
        "Add the coconut milk and simmer for 15 minutes.",
        "Serve with rice."
    ]
},

{
    id: 2,
    name: "Pasta Carbonara",
    category: "Italian",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "200 g pasta",
        "100 g bacon",
        "2 eggs",
        "50 g parmesan",
        "Black pepper"
    ],
    instructions: [
        "Cook the pasta in salted water.",
        "Fry the bacon until crispy.",
        "Mix the eggs with parmesan and black pepper.",
        "Add the hot pasta to the bacon.",
        "Remove from heat and mix with the egg mixture."
    ]
},

{
    id: 3,
    name: "Greek Salad",
    category: "Mediterranean",
    time: 15,
    difficulty: "Easy",
    ingredients: [
        "Tomatoes",
        "Cucumber",
        "Red onion",
        "Feta cheese",
        "Olives",
        "Olive oil",
        "Oregano"
    ],
    instructions: [
        "Cut the tomatoes and cucumber.",
        "Slice the red onion.",
        "Add feta and olives.",
        "Season with olive oil and oregano.",
        "Mix and serve fresh."
    ]
},

{
    id: 4,
    name: "Salmon Teriyaki",
    category: "Japanese",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "2 salmon fillets",
        "Teriyaki sauce",
        "Rice",
        "Broccoli",
        "Sesame seeds"
    ],
    instructions: [
        "Cook the rice.",
        "Cook the salmon in a hot pan.",
        "Add teriyaki sauce.",
        "Cook for another 5 minutes.",
        "Serve with rice and broccoli."
    ]
},

{
    id: 5,
    name: "Margherita Pizza",
    category: "Italian",
    time: 35,
    difficulty: "Medium",
    ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella",
        "Fresh basil",
        "Olive oil"
    ],
    instructions: [
        "Preheat the oven to 220°C.",
        "Spread tomato sauce on the dough.",
        "Add mozzarella.",
        "Bake for 12–15 minutes.",
        "Add fresh basil before serving."
    ]
},

{
    id: 6,
    name: "Chicken Caesar Salad",
    category: "Salad",
    time: 20,
    difficulty: "Easy",
    ingredients: [
        "Chicken breast",
        "Romaine lettuce",
        "Parmesan",
        "Croutons",
        "Caesar dressing"
    ],
    instructions: [
        "Cook the chicken and slice it.",
        "Wash and cut the lettuce.",
        "Add chicken, parmesan and croutons.",
        "Add Caesar dressing.",
        "Mix and serve."
    ]
},

{
    id: 7,
    name: "Beef Fried Rice",
    category: "Asian",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Cooked rice",
        "Beef",
        "2 eggs",
        "Carrot",
        "Peas",
        "Soy sauce"
    ],
    instructions: [
        "Cut the beef into small pieces.",
        "Cook the beef in a hot pan.",
        "Add carrot and peas.",
        "Add the cooked rice.",
        "Add eggs and soy sauce.",
        "Stir-fry for several minutes."
    ]
},

{
    id: 8,
    name: "Tomato Pasta",
    category: "Italian",
    time: 20,
    difficulty: "Easy",
    ingredients: [
        "200 g pasta",
        "Tomato sauce",
        "Garlic",
        "Parmesan",
        "Basil"
    ],
    instructions: [
        "Cook the pasta.",
        "Cook garlic in olive oil.",
        "Add tomato sauce.",
        "Simmer for 10 minutes.",
        "Mix with pasta and parmesan."
    ]
},

{
    id: 9,
    name: "Chicken Teriyaki Bowl",
    category: "Japanese",
    time: 30,
    difficulty: "Easy",
    ingredients: [
        "Chicken",
        "Teriyaki sauce",
        "Rice",
        "Carrot",
        "Cucumber",
        "Sesame seeds"
    ],
    instructions: [
        "Cook the rice.",
        "Cook the chicken in a pan.",
        "Add teriyaki sauce.",
        "Slice the vegetables.",
        "Build the bowl and add sesame seeds."
    ]
},

{
    id: 10,
    name: "Vegetable Curry",
    category: "Indian",
    time: 35,
    difficulty: "Easy",
    ingredients: [
        "Potatoes",
        "Carrots",
        "Chickpeas",
        "Coconut milk",
        "Curry powder",
        "Rice"
    ],
    instructions: [
        "Cut the vegetables.",
        "Cook them with curry powder.",
        "Add chickpeas and coconut milk.",
        "Simmer for 20 minutes.",
        "Serve with rice."
    ]
},

{
    id: 11,
    name: "Tuna Sandwich",
    category: "Quick",
    time: 10,
    difficulty: "Easy",
    ingredients: [
        "Bread",
        "Tuna",
        "Mayonnaise",
        "Lettuce",
        "Tomato"
    ],
    instructions: [
        "Mix tuna with mayonnaise.",
        "Toast the bread.",
        "Add lettuce and tomato.",
        "Add the tuna mixture.",
        "Close the sandwich and serve."
    ]
},

{
    id: 12,
    name: "Avocado Toast",
    category: "Breakfast",
    time: 10,
    difficulty: "Easy",
    ingredients: [
        "Bread",
        "Avocado",
        "Egg",
        "Lemon",
        "Chili flakes"
    ],
    instructions: [
        "Toast the bread.",
        "Mash the avocado.",
        "Add lemon juice.",
        "Cook the egg.",
        "Place everything on the toast."
    ]
},

{
    id: 13,
    name: "Beef Tacos",
    category: "Mexican",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Tortillas",
        "Ground beef",
        "Tomato",
        "Lettuce",
        "Cheddar",
        "Salsa"
    ],
    instructions: [
        "Cook the ground beef.",
        "Season with taco spices.",
        "Warm the tortillas.",
        "Add beef and vegetables.",
        "Finish with cheese and salsa."
    ]
},

{
    id: 14,
    name: "Mushroom Risotto",
    category: "Italian",
    time: 40,
    difficulty: "Medium",
    ingredients: [
        "Arborio rice",
        "Mushrooms",
        "Onion",
        "Vegetable stock",
        "Parmesan"
    ],
    instructions: [
        "Cook the onion.",
        "Add mushrooms.",
        "Add rice and toast for 2 minutes.",
        "Gradually add the stock.",
        "Stir until creamy.",
        "Finish with parmesan."
    ]
},

{
    id: 15,
    name: "Chicken Fajitas",
    category: "Mexican",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Chicken",
        "Bell pepper",
        "Onion",
        "Tortillas",
        "Paprika",
        "Lime"
    ],
    instructions: [
        "Slice the chicken and vegetables.",
        "Cook everything in a hot pan.",
        "Add paprika and lime.",
        "Warm the tortillas.",
        "Fill and serve."
    ]
},

{
    id: 16,
    name: "Pesto Pasta",
    category: "Italian",
    time: 15,
    difficulty: "Easy",
    ingredients: [
        "Pasta",
        "Pesto",
        "Parmesan",
        "Cherry tomatoes"
    ],
    instructions: [
        "Cook the pasta.",
        "Cut the tomatoes.",
        "Mix pasta with pesto.",
        "Add tomatoes and parmesan.",
        "Serve immediately."
    ]
},

{
    id: 17,
    name: "Salmon Poke Bowl",
    category: "Hawaiian",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Salmon",
        "Rice",
        "Avocado",
        "Cucumber",
        "Soy sauce",
        "Sesame seeds"
    ],
    instructions: [
        "Cook the rice and let it cool.",
        "Cut the salmon and vegetables.",
        "Season the salmon with soy sauce.",
        "Build the bowl.",
        "Add sesame seeds."
    ]
},

{
    id: 18,
    name: "Vegetable Omelette",
    category: "Quick",
    time: 15,
    difficulty: "Easy",
    ingredients: [
        "3 eggs",
        "Bell pepper",
        "Onion",
        "Cheese",
        "Salt and pepper"
    ],
    instructions: [
        "Beat the eggs.",
        "Cook the vegetables.",
        "Add the eggs.",
        "Add cheese.",
        "Fold the omelette and serve."
    ]
},

{
    id: 19,
    name: "Lentil Soup",
    category: "Soup",
    time: 40,
    difficulty: "Easy",
    ingredients: [
        "Lentils",
        "Carrot",
        "Onion",
        "Tomato",
        "Vegetable stock"
    ],
    instructions: [
        "Cook the onion and carrot.",
        "Add lentils and tomato.",
        "Add vegetable stock.",
        "Simmer for 30 minutes.",
        "Season and serve."
    ]
},

{
    id: 20,
    name: "Chicken Noodles",
    category: "Asian",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Noodles",
        "Chicken",
        "Carrot",
        "Broccoli",
        "Soy sauce"
    ],
    instructions: [
        "Cook the noodles.",
        "Cook the chicken.",
        "Add the vegetables.",
        "Add noodles and soy sauce.",
        "Stir-fry everything together."
    ]
},

{
    id: 21,
    name: "Caprese Salad",
    category: "Italian",
    time: 10,
    difficulty: "Easy",
    ingredients: [
        "Tomatoes",
        "Mozzarella",
        "Fresh basil",
        "Olive oil",
        "Balsamic vinegar"
    ],
    instructions: [
        "Slice the tomatoes.",
        "Slice the mozzarella.",
        "Arrange them on a plate.",
        "Add basil.",
        "Finish with olive oil and balsamic vinegar."
    ]
},

{
    id: 22,
    name: "Beef Burger",
    category: "American",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Burger buns",
        "Ground beef",
        "Cheddar",
        "Lettuce",
        "Tomato",
        "Onion"
    ],
    instructions: [
        "Shape the beef into patties.",
        "Cook the patties.",
        "Toast the buns.",
        "Add cheese and vegetables.",
        "Assemble the burger."
    ]
},

{
    id: 23,
    name: "Chickpea Salad",
    category: "Healthy",
    time: 10,
    difficulty: "Easy",
    ingredients: [
        "Chickpeas",
        "Cucumber",
        "Tomato",
        "Red onion",
        "Feta",
        "Lemon"
    ],
    instructions: [
        "Drain the chickpeas.",
        "Cut the vegetables.",
        "Add feta.",
        "Season with lemon.",
        "Mix everything together."
    ]
},

{
    id: 24,
    name: "Chicken Ramen",
    category: "Japanese",
    time: 35,
    difficulty: "Medium",
    ingredients: [
        "Ramen noodles",
        "Chicken",
        "Egg",
        "Mushrooms",
        "Spring onion",
        "Soy sauce"
    ],
    instructions: [
        "Prepare the broth.",
        "Cook the chicken.",
        "Cook the noodles.",
        "Add mushrooms and soy sauce.",
        "Serve with egg and spring onion."
    ]
},

{
    id: 25,
    name: "Spinach Gnocchi",
    category: "Italian",
    time: 20,
    difficulty: "Easy",
    ingredients: [
        "Gnocchi",
        "Spinach",
        "Cream",
        "Garlic",
        "Parmesan"
    ],
    instructions: [
        "Cook the gnocchi.",
        "Cook garlic and spinach.",
        "Add cream.",
        "Add gnocchi.",
        "Finish with parmesan."
    ]
},

{
    id: 26,
    name: "Fish and Chips",
    category: "British",
    time: 40,
    difficulty: "Medium",
    ingredients: [
        "White fish",
        "Potatoes",
        "Flour",
        "Egg",
        "Breadcrumbs"
    ],
    instructions: [
        "Cut the potatoes.",
        "Prepare the breadcrumb coating.",
        "Coat the fish.",
        "Cook the fish until golden.",
        "Bake or fry the potatoes."
    ]
},

{
    id: 27,
    name: "Vegetable Stir Fry",
    category: "Asian",
    time: 20,
    difficulty: "Easy",
    ingredients: [
        "Broccoli",
        "Carrot",
        "Bell pepper",
        "Mushrooms",
        "Soy sauce",
        "Rice"
    ],
    instructions: [
        "Cut all vegetables.",
        "Heat a wok or large pan.",
        "Stir-fry the vegetables.",
        "Add soy sauce.",
        "Serve with rice."
    ]
},

{
    id: 28,
    name: "French Croque Monsieur",
    category: "French",
    time: 20,
    difficulty: "Easy",
    ingredients: [
        "Bread",
        "Ham",
        "Gruyère cheese",
        "Butter",
        "Béchamel sauce"
    ],
    instructions: [
        "Butter the bread.",
        "Add ham and cheese.",
        "Add béchamel sauce.",
        "Bake until golden.",
        "Serve hot."
    ]
},

{
    id: 29,
    name: "Shakshuka",
    category: "Middle Eastern",
    time: 30,
    difficulty: "Easy",
    ingredients: [
        "Eggs",
        "Tomatoes",
        "Bell pepper",
        "Onion",
        "Garlic",
        "Paprika"
    ],
    instructions: [
        "Cook the onion and pepper.",
        "Add tomatoes and spices.",
        "Simmer for 15 minutes.",
        "Make small wells in the sauce.",
        "Crack the eggs into the wells.",
        "Cover and cook until the eggs are ready."
    ]
},

{
    id: 30,
    name: "Creamy Mushroom Pasta",
    category: "Italian",
    time: 25,
    difficulty: "Easy",
    ingredients: [
        "Pasta",
        "Mushrooms",
        "Cream",
        "Garlic",
        "Parmesan"
    ],
    instructions: [
        "Cook the pasta.",
        "Cook the mushrooms with garlic.",
        "Add cream.",
        "Add the cooked pasta.",
        "Finish with parmesan."
    ]
}
```

];

/* ============================================================ */
/* WEEK CONFIGURATION                                           */
/* ============================================================ */

const days = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

const mealTypes = [
"Lunch",
"Dinner"
];

let currentWeek = [];

/* ============================================================ */
/* RANDOM HELPERS                                               */
/* ============================================================ */

function randomRecipe(excludedIds = []) {

```
const available =
    recipes.filter(
        recipe =>
            !excludedIds.includes(recipe.id)
    );


if (available.length === 0) {

    return recipes[
        Math.floor(
            Math.random() * recipes.length
        )
    ];

}


return available[
    Math.floor(
        Math.random() * available.length
    )
];
```

}

/* ============================================================ */
/* GENERATE WEEK                                                */
/* ============================================================ */

function generateWeek() {

```
const usedIds = [];

currentWeek = [];


days.forEach(
    (day, dayIndex) => {

        const meals = [];


        mealTypes.forEach(
            type => {

                const recipe =
                    randomRecipe(
                        usedIds
                    );


                usedIds.push(
                    recipe.id
                );


                meals.push({
                    type,
                    recipe
                });

            }
        );


        currentWeek.push({
            day,
            dayIndex,
            meals
        });

    }
);


renderWeek();
```

}

/* ============================================================ */
/* RENDER WEEK                                                  */
/* ============================================================ */

function renderWeek() {

```
const week =
    document.getElementById(
        "week"
    );


week.innerHTML = "";


currentWeek.forEach(
    day => {

        const dayElement =
            document.createElement(
                "article"
            );


        dayElement.className =
            "day";


        dayElement.innerHTML = `

            <div class="day-header">

                <span class="day-number">
                    ${String(
                        day.dayIndex + 1
                    ).padStart(2, "0")}
                </span>

                <h2 class="day-name">
                    ${day.day}
                </h2>

            </div>


            <div class="meals">

                ${day.meals.map(
                    (meal, mealIndex) => `

                        <div
                            class="meal-card"
                            data-day="${day.dayIndex}"
                            data-meal="${mealIndex}"
                        >

                            <span class="meal-type">
                                ${meal.type}
                            </span>

                            <h3 class="meal-name">
                                ${meal.recipe.name}
                            </h3>

                            <div class="meal-info">

                                <span>
                                    ${meal.recipe.time} min
                                </span>

                                <span>
                                    ${meal.recipe.difficulty}
                                </span>

                            </div>

                            <button
                                class="regenerate-meal"
                                data-day="${day.dayIndex}"
                                data-meal="${mealIndex}"
                                title="Change this meal"
                            >
                                ↻
                            </button>

                        </div>

                    `
                ).join("")}

            </div>

        `;


        week.appendChild(
            dayElement
        );

    }
);


attachMealEvents();
```

}

/* ============================================================ */
/* MEAL EVENTS                                                   */
/* ============================================================ */

function attachMealEvents() {

```
const cards =
    document.querySelectorAll(
        ".meal-card"
    );


cards.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        ".regenerate-meal"
                    )
                ) {
                    return;
                }


                const dayIndex =
                    Number(
                        card.dataset.day
                    );


                const mealIndex =
                    Number(
                        card.dataset.meal
                    );


                const meal =
                    currentWeek[
                        dayIndex
                    ].meals[
                        mealIndex
                    ];


                openRecipe(
                    meal.recipe
                );

            }
        );

    }
);


const regenerateButtons =
    document.querySelectorAll(
        ".regenerate-meal"
    );


regenerateButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const dayIndex =
                    Number(
                        button.dataset.day
                    );


                const mealIndex =
                    Number(
                        button.dataset.meal
                    );


                const usedIds =
                    currentWeek
                        .flatMap(
                            day =>
                                day.meals.map(
                                    meal =>
                                        meal.recipe.id
                                )
                        )
                        .filter(
                            id =>
                                id !==
                                currentWeek[
                                    dayIndex
                                ].meals[
                                    mealIndex
                                ].recipe.id
                        );


                const newRecipe =
                    randomRecipe(
                        usedIds
                    );


                currentWeek[
                    dayIndex
                ].meals[
                    mealIndex
                ].recipe =
                    newRecipe;


                renderWeek();

            }
        );

    }
);
```

}

/* ============================================================ */
/* RECIPE MODAL                                                 */
/* ============================================================ */

function openRecipe(recipe) {

```
document.getElementById(
    "recipe-title"
).textContent =
    recipe.name;


document.getElementById(
    "recipe-category"
).textContent =
    recipe.category;


document.getElementById(
    "recipe-meta"
).innerHTML = `
    <span>${recipe.time} min</span>
    <span>${recipe.difficulty}</span>
`;


document.getElementById(
    "recipe-ingredients"
).innerHTML =
    recipe.ingredients
        .map(
            ingredient =>
                `<li>${ingredient}</li>`
        )
        .join("");


document.getElementById(
    "recipe-instructions"
).innerHTML =
    recipe.instructions
        .map(
            instruction =>
                `<li>${instruction}</li>`
        )
        .join("");


document.getElementById(
    "recipe-modal"
).classList.remove(
    "hidden"
);
```

}

function closeRecipe() {

```
document.getElementById(
    "recipe-modal"
).classList.add(
    "hidden"
);
```

}

/* ============================================================ */
/* MODAL EVENTS                                                 */
/* ============================================================ */

document.getElementById(
"close-modal"
).addEventListener(
"click",
closeRecipe
);

document.querySelector(
".modal-overlay"
).addEventListener(
"click",
closeRecipe
);

document.addEventListener(
"keydown",
event => {

```
    if (event.key === "Escape") {

        closeRecipe();

    }

}
```

);

/* ============================================================ */
/* GENERATE BUTTON                                              */
/* ============================================================ */

document.getElementById(
"generate-week"
).addEventListener(
"click",
generateWeek
);

/* ============================================================ */
/* INITIALIZATION                                               */
/* ============================================================ */

generateWeek();
