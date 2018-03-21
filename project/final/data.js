var recipes = {
    "name": "top",
    "american": {
        "name": "American",
        "img": "images/american.png",
        "tags": [],
        "onclick": 'populate(recipes["american"]["recipes"],"american");',
        "recipes": {
            "juicybroiledburgers": {
                "name": "Juicy Broiled Burgers",
                "img": "images/american/juicybroiledburgers.png",
                "tags": ["entree", "beef", "bread", "cheese"],
                "onclick": 'displayRecipe(recipes["american"],"juicybroiledburgers");',
                "ingredients": [
                    "28 oz. beef",
                    "salt",
                    "pepper",
                    "4 slices cheese",
                    "4 hamburger buns"
                ],
                "instructions": [
                    "Preheat broiler to high. Divide meat into four equal 7-ounce portions and gently shape each one into a patty 4.5-inches wide by approximately 3/4-inch thick. Place on flat surface and create a dimple in the center of the patty by pushing down with three or four fingers. The dimple should be about 1/4 of an inch deep and 3 inches across. Season generously with salt and pepper.",
                    "Place patties on foil-lined broiler pan and position so that tops of patties are 2 1/2 to 3 inches below the broiler elements or flame. Broil for 3 minutes until top is well browned and begging to char. Flip patties and continue to broil until center reads 130 degrees on an instant read thermometer for medium-rare, about 3 minutes longer. Adjust cooking time if you want them more or less cooked.",
                    "Top each patty with a slice of cheese, place back under broiler for 25 seconds to melt, place on buns, top as desired, and serve.",
                ]
            },
            "thinandcrispyfrenchfries": {
                "name": "Thin and Crispy French Fries",
                "img": "images/american/thinandcrispyfrenchfries.png",
                "tags": ["side", "potatoes", "vegetarian", "vegan"],
                "onclick": 'displayRecipe(recipes["american"],"thinandcrispyfrenchfries");',
                "ingredients": [
                    "2 pounds potatoes",
                    "2 tablespoons white vinegar",
                    "salt",
                    "2 quarts peanut oil"
                ],
                "instructions": [
                    "Place potatoes and vinegar in saucepan and add 2 quarts of water and 2 tablespoons of salt. Bring to a boil over high heat. Boil for 10 minutes. Potatoes should be fully tender, but not falling apart. Drain and spread on paper towel-lined rimmed baking sheet. Allow to dry for five minutes.",
                    "Meanwhile, heat oil in 5-quart Dutch oven or large wok over high heat to 400°F. Add 1/3 of fries to oil (oil temperature should drop to around 360°F). Cook for 50 seconds, agitating occasionally with wire mesh spider, then remove to second paper-towel lined rimmed baking sheet. Repeat with remaining potatoes (working in two more batches), allowing oil to return to 400°F after each addition. Allow potatoes to cool to room temperature, about 30 minutes. Continue with step 3, or for best results, freeze potatoes at least over night, or up to 2 months.",
                    "Return oil to 400°F over high heat. Fry half of potatoes until crisp and light golden brown, about 3 1/2 minutes, adjusting heat to maintain at around 360°F. Drain in a bowl lined with paper towels and season immediately with kosher salt. Cooked fries can be kept hot and crisp on a wire rack set on a sheet tray in a 200°F oven while second batch is cooked. Serve immediately.",
                ]
            },
            "plankedmeatloaf": {
                "name": "Planked Meatloaf",
                "img": "images/american/plankedmeatloaf.png",
                "tags": ["beef", "barbecue", "entree", "spicy"],
                "onclick": 'displayRecipe(recipes["american"],"plankedmeatloaf");',
                "ingredients": [
                    "1/2 cup ketchup",
                    "3 tablespoons packed dark brown sugar",
                    "2 tablespoons cider vinegar",
                    "1 tablespoon Worcestershire sauce",
                    "1 teaspoon yellow mustard",
                    "1 teaspoon hot sauce",
                    "4 ounces herb stuffing",
                    "1 teaspoon chili powder",
                    "1/2 teaspoon freshly ground black pepper",
                    "1/2 teaspoon ground cumin",
                    "1/8 teaspoon cayenne pepper",
                    "1 tablespoon olive oil",
                    "1 small onion, finely chopped",
                    "1/2 red pepper, finely chopped",
                    "3 medium cloves garlic, minced",
                    "1 teaspoon fresh thyme",
                    "2/3 pound ground beef chuck",
                    "2/3 pound ground veal",
                    "2/3 pound ground pork",
                    "1/2 cup milk",
                    "2 eggs, lightly beaten",
                    "1/4 cup minced fresh parsley",
                    "1 teaspoon salt",
                    "1 wood plank, soaked in water for at least 1 hour prior to use",
                    "1 small chunk of light smoking wood, such as apple or cherry"
                ],
                "instructions": [
                    "To make the glaze, mix together ketchup, brown sugar, vinegar, Worcestershire sauce, mustard, and hot sauce in a small bowl. Set aside.",
                    "Place stuffing, chili powder, black pepper, cumin, and cayenne pepper in the bowl of a food processor and pulse until stuffing is finely chopped. Transfer to a large bowl.",
                    "Heat olive oil in a medium skillet over medium-high heat until shimmering. Add in onion and red pepper and cook until onions have softened, about 6 to 8 minutes. Add in garlic and thyme and cook until fragrant, about 30 seconds. Transfer to bowl with stuffing mixture.",
                    "Add beef, veal, pork, milk, eggs, parsley, and salt to bowl and mix with hands until thoroughly combined.",
                    "Line a loaf pan with wax or parchment paper. Pour out meatloaf mixture into pan and press down, forming a loaf. Turn loaf out wood plank and remove pan and paper.",
                    "Light one chimney full of charcoal. When all the charcoal is lit and covered with gray ash, pour out and arrange the coals on one side of the charcoal grate and place wood chunk directly on top of coals. Set cooking grate in place, cover grill and allow to preheat for 5 minutes. Place planked meatloaf on cool side of grill, cover and cook for 15 minutes.",
                    "Brush meatloaf all over with glaze, cover, and continue to cook until an instant read thermometer registers 155 degrees when inserted into middle of meatloaf, about 40-60 minutes more. Remove from grill, lest rest for 15 minutes. Slice and serve."
                ]
            },
            "crispgrilledcheese": {
                "name": "Crisp Grilled Cheese",
                "img": "images/american/crispgrilledcheese.png",
                "tags": ["entree", "cheese", "vegetarian", "bread"],
                "onclick": 'displayRecipe(recipes["american"],"crispgrilledcheese");',
                "ingredients": [
                    "8 slices Texas toast",
                    "8 tablespoons unsalted butter, softened",
                    "1 cup finely grated Parmesan cheese",
                    "2 cups grated sharp cheddar cheese"
                ],
                "instructions": [
                    "Spread each slice of bread on both sides with butter. Arrange four slices in large skillet and cook over medium heat until turning light golden, 2 to 3 minutes.",
                    "Sprinkle slices with 1/2 cup Parmesan and, using spatula, flip over.",
                    "Sprinkle toasted sides of bread with 1 cup cheddar and cook until cheddar begins to melt and Parmesan begins to brown and crisp, 2 to 3 minutes.",
                    "Once cheddar is melted, turn 2 of the slices onto the other two and press together to sandwich. Transfer to cutting board and repeat with remaining ingredients.",
                    "Allow sandwiches to rest about 3 minutes, then cut in half and serve."
                ]
            },
            "chililimecorn": {
                "name": "Chili Lime Corn",
                "img": "images/american/chililimecorn.png",
                "tags": ["side", "corn", "vegetarian", "spicy"],
                "onclick": 'displayRecipe(recipes["american"],"chililimecorn");',
                "ingredients": [
                    "6 ears corn, husked",
                    "1/4 pound butter at room temperature, plus 3 tablespoons",
                    "2 teaspoons chili powder",
                    "1/4 teaspoon cayenne pepper",
                    "Zest of 1 lime",
                    "Juice of 1/2 lime",
                    "Kosher salt",
                    "Freshly ground black pepper",
                    "Lime wedges for serving"
                ],
                "instructions": [
                    "In a small bowl, whisk together 1/4 pound of the butter, chili powder, cayenne pepper, lime zest, and lime juice until thoroughly combined Set aside.",
                    "Lightly butter the corn with the remaining butter and season with salt and pepper to taste. Wrap ears individually in aluminum foil.",
                    "Light one chimney full of charcoal. When all the charcoal is lit and covered with gray ash, pour out and spread the coals evenly over the charcoal grate. Clean and oil the grilling grate. Place the foiled corn on the grill and cook until tender and slightly charred, about 20 minutes, turning 4 times during cooking. Remove from the grill and let cool for 3 to 5 minutes.",
                    "Open the foil, slather each ear in the chili-lime butter, and serve with the lime wedges.",
                ]
            },
            "maplebakedbeans": {
                "name": "Maple Baked Beans",
                "img": "images/american/maplebakedbeans.png",
                "tags": ["pork", "beans", "entree", "barbecue"],
                "onclick": 'displayRecipe(recipes["american"],"maplebakedbeans");',
                "ingredients": [
                    "2 cup dried navy beans",
                    "6 strips bacon",
                    "1 onion chopped",
                    "1 teaspoon dried mustard",
                    "1 teaspoon salt",
                    "1/2 cup maple syrup",
                    "1 pork hock, fresh or smoked",
                    "2 tablespoons butter",
                    "2 tablespoons brown sugar"
                ],
                "instructions": [
                    "Preheat oven to 325°. Simmer navy beans in water until tender, about 20 minutes. Drain beans and reserve cooking liquid. Line bean pot with strips of bacon. In a large bowl toss together onion and beans. In another bowl combine 2 cups bean cooking liquid, mustard, salt and maple syrup. Place half the bean mixture on bacon strips in pot. Place pork hock on beans, top with rest of bean onion mixture, then pour over reserved cooking liquid/syrup mixture. Cover with lid and place in oven for 3 hours, or until pork hock is fully cooked and pulling away from the bone. If beans begin to look dry, add more cooking liquid.",
                    "Once pork hock is cooked, remove beans from oven and remove lid. Mash together butter and brown sugar into a paste, scatter sugar paste over beans and place back in the oven, uncovered, for an additional 30 minutes. Remove from oven and serve with cold beer and dark bread.",
                ]
            },
            "scallionbiscuits": {
                "name": "Cheddar and Scallion Biscuits",
                "img": "images/american/scallionbiscuits.png",
                "tags": ["cheese", "bread", "side"],
                "onclick": 'displayRecipe(recipes["american"],"scallionbiscuits");',
                "ingredients": [
                    "9 ounces (about 1 3/4 cups) all purpose flour",
                    "2 teaspoons baking powder",
                    "1 teaspoon salt",
                    "2 tablespoons butter",
                    "2 ounces cheddar cheese, grated",
                    "Green part of 1 scallion, sliced thin",
                    "1 cup milk",
                ],
                "instructions": [
                    "Preheat the oven to 400°F and line a baking sheet with parchment paper for easy cleanup. In a medium bowl. combine the flour, baking powder, and salt, Whisk to combine. Cut the butter into several pieces and add it to the flour, With your fingertips, rub the butter into the flour until you have very small pieces throughout. Add the cheese and scallion, and stir to distribute. Add the milk and stir to combine.",
                    "Flour your work surface lightly. Remove the dough from the bowl, put it on your floured surface, and pat it into a rough square about 9 inches across. Fold the dough in thirds, like a letter, pat it down again until it's about an inch thick, turn it 90°, and fold in thirds again.",
                    "Dust your work surface with flour again, if needed, and roll the dough to a thickness of 1/2 to 3/4 inches. Using a biscuit cutter or other similar tool, cut circles from the dough and place them on your prepared baking sheet.",
                    "Re-roll the scraps. You'll get a better rise out of the next batch of biscuits if you keep the dough oriented the same way instead of rolling it up or smashing it together. The folding in the previous steps has created horizontal layers that cause the biscuits to rise, just like the layers in pastry crust or puff pastry. So, when you combine the scraps, keep the horizontal layers horizontal as much as possible. Cut more biscuit from the rerolled biscuit dough. If you don't want to end up with even more scraps, consider cutting the second batch into squares instead of rounds.",
                    "Rather than rolling the scraps a third time, you can make a few hand-formed biscuits from whatever is left after the second batch is cut They won't be pretty, but they're fine as samples for the cook.",
                    "Brush the tops of the biscuits with milk or melted butter, if desired, and bake at 400°F until lightly browned, about 20 minutes."
                ]
            },
            "sloppyjoenachos": {
                "name": "Sloppy Joe Nachos",
                "img": "images/american/sloppyjoenachos.png",
                "tags": ["pork", "beans", "entree", "barbecue"],
                "onclick": 'displayRecipe(recipes["american"],"sloppyjoenachos");',
                "ingredients": [
                    "1 teaspoon canola oil",
                    "1 pound ground beef",
                    "1/2 teaspoon kosher salt",
                    "1/4 teaspoon ground black pepper",
                    "1/2 cup ketchup",
                    "2 tablespoons yellow mustard",
                    "2 tablespoons brown sugar",
                    "1 jar queso dip",
                    "1 (16-ounce) bag of tortilla chips",
                ],
                "instructions": [
                    "In medium sauté pan, warm canola oil over medium-high heat. Add ground beef, salt and pepper to pan, stirring every couple minutes to break up meat. Sauté meat until fully cooked, 6 to 7 minutes. Remove pan from heat. Push the cooked ground meat to one side of the pan, and use a spoon to remove and discard a majority of the fat from beef. Stir ketchup, mustard, brown sugar and cayenne powder into the ground beef, and warm the meat over medium-high heat for just a couple minutes until beef is combined with sauce.",
                    "Pour queso dip into a microwave-safe dish, and heat in microwave until warm. Layer a plate with the tortilla chips, pouring warm sloppy joe mix over the chips. When queso dip is heated, drizzle over chips, and serve."
                ]
            },
        },
    },
    "chinese": {
        "name": "Chinese",
        "img": "images/chinese.png",
        "tags": [],
        "onclick": 'populate(recipes["chinese"]["recipes"],"chinese");',
        "recipes": {
            "spareribs": {
                "name": "Chinese Spareribs",
                "img": "images/chinese/spareribs.png",
                "tags": ["entree", "pork"],
                "onclick": 'displayRecipe(recipes["chinese"],"spareribs");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "beefandbroccoli": {
                "name": "Beef and Broccoli",
                "img": "images/chinese/beefandbroccoli.png",
                "tags": ["entree", "beef", "broccoli"],
                "onclick": 'displayRecipe(recipes["chinese"],"beefandbroccoli");',
                "ingredients": [
                    "1/3 cup oyster sauce",
                    "2 teaspoons Asian (toasted) sesame oil",
                    "1/3 cup sherry",
                    "1 teaspoon soy sauce",
                    "1 teaspoon white sugar",
                    "1 teaspoon cornstarch",
                    "3/4 pound beef round steak, cut into 1/8-inch thick strips",
                    "3 tablespoons vegetable oil, plus more if needed",
                    "1 thin slice of fresh ginger root",
                    "1 clove garlic, peeled and smashed",
                    "1 pound broccoli, cut into florets"
                ],
                "instructions": [
                    "Whisk together the oyster sauce, sesame oil, sherry, soy sauce, sugar, and cornstarch in a bowl, and stir until the sugar has dissolved. Place the steak pieces into a shallow bowl, pour the oyster sauce mixture over the meat, stir to coat well, and marinate for at least 30 minutes in refrigerator.",
                    "Heat vegetable oil in a wok or large skillet over medium-high heat, and stir in the ginger and garlic. Let them sizzle in the hot oil for about 1 minute to flavor the oil, then remove and discard. Stir in the broccoli, and toss and stir in the hot oil until bright green and almost tender, 5 to 7 minutes. Remove the broccoli from the wok, and set aside.",
                    "Pour a little more oil into the wok, if needed, and stir and toss the beef with the marinade until the sauce forms a glaze on the beef, and the meat is no longer pink, about 5 minutes. Return the cooked broccoli to the wok, and stir until the meat and broccoli are heated through, about 3 minutes.",
                ]
            },
            "sweetandsourchicken": {
                "name": "Sweet and Sour Chicken",
                "img": "images/chinese/sweetandsourchicken.png",
                "tags": ["entree", "chicken", "bell pepper"],
                "onclick": 'displayRecipe(recipes["chinese"],"sweetandsourchicken");',
                "ingredients": [
                    "1 (8 ounce) can pineapple chunks, drained (juice reserved)",
                    "1/4 cup cornstarch",
                    "1 3/4 cups water, divided",
                    "3/4 cup white sugar",
                    "1/2 cup distilled white vinegar",
                    "2 drops orange food color",
                    "8 skinless, boneless chicken breast halves - cut into 1 inch cubes",
                    "2 1/4 cups self-rising flour",
                    "2 tablespoons vegetable oil",
                    "2 tablespoons cornstarch",
                    "1/2 teaspoon salt",
                    "1/4 teaspoon ground white pepper",
                    "1 egg",
                    "1 1/2 cups water",
                    "1 quart vegetable oil for frying",
                    "2 green bell pepper, cut into 1 inch pieces"
                ],
                "instructions": [
                    "In a saucepan, combine 1 1/2 cups water, sugar, vinegar, reserved pineapple juice, and orange food coloring. Heat to boiling. Turn off heat. Combine 1/4 cup cornstarch and 1/4 cup water; slowly stir into saucepan. Continue stirring until mixture thickens.",
                    "Combine flour, 2 tablespoons oil, 2 tablespoons cornstarch, salt, white pepper, and egg. Add 1 1/2 cups water gradually to make a thick batter. Stir to blend thoroughly. Add chicken pieces, and stir until chicken is well coated.",
                    "Heat oil in skillet or wok to 360 degrees F (180 degrees C). Fry chicken pieces in hot oil 10 minutes, or until golden. Remove chicken, and drain on paper towels.",
                    "When ready to serve, layer green peppers, pineapple chunks, and cooked chicken pieces on a platter. Pour hot sweet and sour sauce over top."
                ]
            },
            "szechwanshrimp": {
                "name": "Szechwan Shrimp",
                "img": "images/chinese/szechwanshrimp.png",
                "tags": ["entree", "shrimp"],
                "onclick": 'displayRecipe(recipes["chinese"],"szechwanshrimp");',
                "ingredients": [
                    "4 tablespoons water",
                    "2 tablespoons ketchup",
                    "1 tablespoon soy sauce",
                    "2 teaspoons cornstarch",
                    "1 teaspoon honey",
                    "1/2 teaspoon crushed red pepper",
                    "1/4 teaspoon ground ginger",
                    "1 tablespoon vegetable oil",
                    "1/4 cup sliced green onions",
                    "4 cloves garlic, minced",
                    "12 ounces cooked shrimp, tails removed",
                ],
                "instructions": [
                    "In a bowl, stir together water, ketchup, soy sauce, cornstarch, honey, crushed red pepper, and ground ginger. Set aside.",
                    "Heat oil in a large skillet over medium-high heat. Stir in green onions and garlic; cook 30 seconds. Stir in shrimp, and toss to coat with oil. Stir in sauce. Cook and stir until sauce is bubbly and thickened.",
                ]
            },
            "friedrice": {
                "name": "Fried Rice",
                "img": "images/chinese/friedrice.png",
                "tags": ["side", "chicken", "rice"],
                "onclick": 'displayRecipe(recipes["chinese"],"friedrice");',
                "ingredients": [
                    "1 egg",
                    "1 tablespoon water",
                    "1 tablespoon butter",
                    "1 tablespoon vegetable oil",
                    "1 onion, chopped",
                    "2 cups cooked white rice, cold",
                    "2 tablespoons soy sauce",
                    "1 teaspoon ground black pepper",
                    "1 cup cooked, chopped chicken meat",
                ],
                "instructions": [
                    "In a small bowl, beat egg with water. Melt butter in a large skillet over medium low heat. Add egg and leave flat for 1 to 2 minutes. Remove from skillet and cut into shreds.",
                    "Heat oil in same skillet; add onion and saute until soft. Then add rice, soy sauce, pepper and chicken. Stir fry together for about 5 minutes, then stir in egg. Serve hot.",
                ]
            },
            "eggdropsoup": {
                "name": "Egg Drop Soup",
                "img": "images/chinese/eggdropsoup.png",
                "tags": ["side", "soup", "egg"],
                "onclick": 'displayRecipe(recipes["chinese"],"eggdropsoup");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    "filipino": {
        "name": "Filipino",
        "img": "images/filipino.png",
        "tags": [],
        "onclick": 'populate(recipes["filipino"]["recipes"],"filipino");',
        "recipes": {
            "chickenadobo": {
                "name": "Chicken Adobo",
                "img": "images/filipino/chickenadobo.png",
                "tags": ["entree", "pork"],
                "onclick": 'displayRecipe(recipes["filipino"],"chickenadobo");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "tokneneng": {
                "name": "Tokneneng",
                "img": "images/filipino/tokneneng.png",
                "tags": ["entree", "chicken", "egg"],
                "onclick": 'displayRecipe(recipes["filipino"],"tokneneng");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "lumpiamollica": {
                "name": "Lumpia Mollica",
                "img": "images/filipino/lumpiamollica.png",
                "tags": ["side", "chicken", "egg"],
                "onclick": 'displayRecipe(recipes["filipino"],"lumpiamollica");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "chickenteriyaki": {
                "name": "Chicken Teriyaki",
                "img": "images/filipino/chickenteriyaki.png",
                "tags": ["side", "chicken", "egg"],
                "onclick": 'displayRecipe(recipes["filipino"],"chickenteriyaki");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "pancit": {
                "name": "Pancit",
                "img": "images/filipino/pancit.png",
                "tags": ["entree", "chicken", "noodle"],
                "onclick": 'displayRecipe(recipes["filipino"],"pancit");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "grilledchickenadobo": {
                "name": "Grilled Chicken Adobo",
                "img": "images/filipino/grilledchickenadobo.png",
                "tags": ["entree", "chicken", "egg"],
                "onclick": 'displayRecipe(recipes["filipino"],"grilledchickenadobo");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
            "pandesal": {
                "name": "Pan De Sal",
                "img": "images/filipino/pandesal.png",
                "tags": ["side", "bread", "egg"],
                "onclick": 'displayRecipe(recipes["filipino"],"pandesal");',
                "ingredients": [
                    "3 tablespoons hoisin sauce",
                    "1 tablespoon ketchup",
                    "1 tablespoon honey",
                    "1 tablespoon soy sauce",
                    "1 tablespoon sake",
                    "1 teaspoon lemon juice",
                    "1 teaspoon grated fresh ginger",
                    "1/2 teaspoon grated fresh garlic",
                    "1/4 teaspoon Chinese five-spice powder",
                    "1 pound pork spareribs"
                ],
                "instructions": [
                    "In a shallow glass dish, mix together the hoisin sauce, ketchup, honey, soy sauce, sake, rice vinegar, lemon juice, ginger, garlic and five-spice powder. Place the ribs in the dish, and turn to coat. Cover and marinate in the refrigerator for 2 hours, or as long as overnight.",
                    "Preheat the oven to 325 degrees F (165 degrees C). Fill a broiler tray with enough water to cover the bottom. Place the grate or rack over the tray. Arrange the ribs on the grate.",
                    "Place the broiler rack in the center of the oven. Cook for 40 minutes, turning and brushing with the marinade every 10 minutes. Let the marinade cook on for the final 10 minutes to make a glaze. Finish under the broiler if desired. Discard any remaining marinade.",
                ]
            },
        }
    },
    "french": {
        "name": "French",
        "img": "images/french.png",
        "tags": [],
        "onclick": 'populate(recipes["french"]["recipes"],"french");',
        "recipes": {
            "baguette": {
                "name": "French Baguette",
                "img": "images/french/baguette.png",
                "tags": ["side", "bread"],
                "onclick": 'displayRecipe(recipes["french"],"baguette");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "frenchloaf": {
                "name": "French Loaf",
                "img": "images/french/frenchloaf.png",
                "tags": ["side", "bread"],
                "onclick": 'displayRecipe(recipes["french"],"frenchloaf");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "pouletdeprovencal": {
                "name": "Poulet de Provencal",
                "img": "images/french/pouletdeprovencal.png",
                "tags": ["entree", "chicken"],
                "onclick": 'displayRecipe(recipes["french"],"pouletdeprovencal");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cremebrulee": {
                "name": "Sinful Creme Brulee",
                "img": "images/french/cremebrulee.png",
                "tags": ["desert", "egg"],
                "onclick": 'displayRecipe(recipes["french"],"cremebrulee");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cremefraiche": {
                "name": "Creme Fraiche",
                "img": "images/french/cremefraiche.png",
                "tags": ["desert", "cream"],
                "onclick": 'displayRecipe(recipes["french"],"cremefraiche");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "frenchonionsoup": {
                "name": "French Onion Soup",
                "img": "images/french/frenchonionsoup.png",
                "tags": ["soup", "entree"],
                "onclick": 'displayRecipe(recipes["french"],"frenchonionsoup");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "chickencordonbleu": {
                "name": "Chicken Cordon Bleu",
                "img": "images/french/chickencordonbleu.png",
                "tags": ["bread", "entree", "chicken"],
                "onclick": 'displayRecipe(recipes["french"],"chickencordonbleu");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "augratinpotatoes": {
                "name": "Creamy Au Gratin Potatoes",
                "img": "images/french/augratinpotatoes.png",
                "tags": ["cheese", "entree", "potato"],
                "onclick": 'displayRecipe(recipes["french"],"augratinpotatoes");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    "irish": {
        "name": "Irish",
        "img": "images/irish.png",
        "tags": [],
        "onclick": 'populate(recipes["irish"]["recipes"],"irish");',
        "recipes": {
            "beefbrisket": {
                "name": "Braised Corned Beef Brisket",
                "img": "images/irish/beefbrisket.png",
                "tags": ["entree", "beef"],
                "onclick": 'displayRecipe(recipes["irish"],"beefbrisket");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "irishcoffee": {
                "name": "Irish Coffee",
                "img": "images/irish/irishcoffee.png",
                "tags": ["drink", "coffee"],
                "onclick": 'displayRecipe(recipes["irish"],"irishcoffee");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "stoutstew": {
                "name": "Beef and Irish Stout Stew",
                "img": "images/irish/stoutstew.png",
                "tags": ["entree", "soup", "potato"],
                "onclick": 'displayRecipe(recipes["irish"],"stoutstew");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "sodabread": {
                "name": "Irish Soda Bread",
                "img": "images/irish/sodabread.png",
                "tags": ["entree", "bread"],
                "onclick": 'displayRecipe(recipes["irish"],"sodabread");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "wheatenbread": {
                "name": "Moist Wheaten Bread",
                "img": "images/irish/wheatenbread.png",
                "tags": ["entree", "bread"],
                "onclick": 'displayRecipe(recipes["irish"],"wheatenbread");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cornedbeef": {
                "name": "Guiness Corned Beef",
                "img": "images/irish/cornedbeef.png",
                "tags": ["entree", "beef"],
                "onclick": 'displayRecipe(recipes["irish"],"cornedbeef");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "colcannon": {
                "name": "Colcannon",
                "img": "images/irish/colcannon.png",
                "tags": ["entree", "potato"],
                "onclick": 'displayRecipe(recipes["irish"],"colcannon");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "shepherdspie": {
                "name": "Irish Shepherd's Pie",
                "img": "images/irish/shepherdspie.png",
                "tags": ["entree", "potato"],
                "onclick": 'displayRecipe(recipes["irish"],"shepherdspie");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    "italian": {
        "name": "Italian",
        "img": "images/italian.png",
        "tags": [],
        "onclick": 'populate(recipes["italian"]["recipes"],"italian");',
        "recipes": {
            "pizzacrust": {
                "name": "Pizza Crust",
                "img": "images/italian/pizzacrust.png",
                "tags": ["entree", "bread"],
                "onclick": 'displayRecipe(recipes["italian"],"pizzacrust");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cheeselasagna": {
                "name": "Cheese Lasagna",
                "img": "images/italian/cheeselasagna.png",
                "tags": ["entree", "vegetarian"],
                "onclick": 'displayRecipe(recipes["italian"],"cheeselasagna");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "meatballs": {
                "name": "Beef Meatballs",
                "img": "images/italian/meatballs.png",
                "tags": ["entree", "beef"],
                "onclick": 'displayRecipe(recipes["italian"],"meatballs");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "gnocchi": {
                "name": "Ricotta Gnocchi",
                "img": "images/italian/gnocchi.png",
                "tags": ["entree", "potato", "cheese"],
                "onclick": 'displayRecipe(recipes["italian"],"gnocchi");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "tiramisu": {
                "name": "Tiramisu",
                "img": "images/italian/tiramisu.png",
                "tags": ["desert", "cream"],
                "onclick": 'displayRecipe(recipes["italian"],"tiramisu");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cacioepepe": {
                "name": "Cacio e Pepe",
                "img": "images/italian/cacioepepe.png",
                "tags": ["entree", "vegan", "vegetarian"],
                "onclick": 'displayRecipe(recipes["italian"],"cacioepepe");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "sicilianspaghetti": {
                "name": "Sicilian Spaghetti",
                "img": "images/italian/sicilianspaghetti.png",
                "tags": ["entree", "vegetarian"],
                "onclick": 'displayRecipe(recipes["italian"],"sicilianspaghetti");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    "japanese": {
        "name": "Japanese",
        "img": "images/japanese.png",
        "tags": [],
        "onclick": 'populate(recipes["japanese"]["recipes"],"japanese");',
        "recipes": {
            "chickenkatsu": {
                "name": "Chicken Katsu",
                "img": "images/japanese/chickenkatsu.png",
                "tags": ["entree", "chicken", "bread"],
                "onclick": 'displayRecipe(recipes["japanese"],"chickenkatsu");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "cheesecake": {
                "name": "Spongy Japanese Cheesecake",
                "img": "images/japanese/cheesecake.png",
                "tags": ["desert", "cheese"],
                "onclick": 'displayRecipe(recipes["japanese"],"cheesecake");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "okonomiyaki": {
                "name": "Okonomiyaki",
                "img": "images/japanese/okonomiyaki.png",
                "tags": ["entree", "cheese"],
                "onclick": 'displayRecipe(recipes["japanese"],"okonomiyaki");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "noodlesalad": {
                "name": "Oriental Cold Noodle Salad",
                "img": "images/japanese/noodlesalad.png",
                "tags": ["entree", "noodle"],
                "onclick": 'displayRecipe(recipes["japanese"],"noodlesalad");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "kushiyaki": {
                "name": "Beef Kushiyaki",
                "img": "images/japanese/kushiyaki.png",
                "tags": ["entree", "beef"],
                "onclick": 'displayRecipe(recipes["japanese"],"kushiyaki");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "mochi": {
                "name": "Mochi",
                "img": "images/japanese/mochi.png",
                "tags": ["desert", "beans"],
                "onclick": 'displayRecipe(recipes["japanese"],"mochi");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    "mexican": {
        "name": "Mexican",
        "img": "images/mexican.png",
        "tags": [],
        "onclick": 'populate(recipes["mexican"]["recipes"],"mexican");',
        "recipes": {
            "sevenlayerdip": {
                "name": "Seven Layer Dip",
                "img": "images/mexican/sevenlayerdip.png",
                "tags": ["side", "beans"],
                "onclick": 'displayRecipe(recipes["mexican"],"sevenlayerdip");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "carnitas": {
                "name": "Carnitas",
                "img": "images/mexican/carnitas.png",
                "tags": ["entree", "pork"],
                "onclick": 'displayRecipe(recipes["mexican"],"carnitas");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "secretsalsa": {
                "name": "Secret Salsa",
                "img": "images/mexican/secretsalsa.png",
                "tags": ["side", "vegetarian", "vegan"],
                "onclick": 'displayRecipe(recipes["mexican"],"secretsalsa");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "chickenflautas": {
                "name": "Chicken Flautas",
                "img": "images/mexican/chickenflautas.png",
                "tags": ["entree", "chicken"],
                "onclick": 'displayRecipe(recipes["mexican"],"chickenflautas");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "sopes": {
                "name": "Mexican Sopes",
                "img": "images/mexican/sopes.png",
                "tags": ["side", "bread"],
                "onclick": 'displayRecipe(recipes["mexican"],"sopes");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "tacosoup": {
                "name": "Chicken Taco Soup",
                "img": "images/mexican/tacosoup.png",
                "tags": ["entree", "soup", "chicken"],
                "onclick": 'displayRecipe(recipes["mexican"],"tacosoup");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
            "guacamole": {
                "name": "Guacamole",
                "img": "images/mexican/guacamole.png",
                "tags": ["side", "vegetarian", "vegan"],
                "onclick": 'displayRecipe(recipes["mexican"],"guacamole");',
                "ingredients": [
                    "4 cups chicken broth, divided",
                    "1/8 teaspoon ground ginger",
                    "2 tablespoons chopped fresh chives",
                    "1/4 teaspoon salt",
                    "1 1/2 tablespoons cornstarch",
                    "2 eggs",
                    "1 egg yolk",
                ],
                "instructions": [
                    "Reserve 3/4 cup of chicken broth, and pour the rest into a large saucepan. Stir the salt, ginger and chives into the saucepan, and bring to a rolling boil. In a cup or small bowl, stir together the remaining broth and cornstarch until smooth. Set aside.",
                    "In a small bowl, whisk the eggs and egg yolk together using a fork. Drizzle egg a little at a time from the fork into the boiling broth mixture. Egg should cook immediately. Once the eggs have been dropped, stir in the cornstarch mixture gradually until the soup is the desired consistency.",
                ]
            },
        }
    },
    /*"southafrican": {
        "name": "South African",
        "img": "images/southafrican.png",
        "tags": [],
        "onclick": 'populate(recipes["southafrican"]["recipes"],"southafrican");',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/southafrican.png",
                "tags": ["a"],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": [
                    "2 cups noodles",
                    "1 egg"
                ],
                "instructions": [
                    "Go to a Chinese Restaurant instead",
                    "Eat"
                ]
            },
        }
    },*/
};

var tagOptions = [];
for (var c in recipes) {
    //console.log(recipes[c]["recipes"]);
    for (var rec in recipes[c]["recipes"]) {
        //console.log(recipes[c]["recipes"][rec]["tags"]);
        var tagArr = recipes[c]["recipes"][rec]["tags"];
        for (var tag in tagArr) {
            var t = tagArr[tag];
            if (t != "" && recipes[c]["tags"].indexOf(t) < 0) {
                recipes[c]["tags"].push(t);
                if (tagOptions.indexOf(t) < 0) {
                    tagOptions.push(t);
                }
            }
        }
    }
}