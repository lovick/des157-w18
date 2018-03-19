var recipes = {
    "name": "top",
    "american": {
        "name": "American",
        "img": "images/american.png",
        "tags": [],
        "onclick": 'populate(recipes["american"]["recipes"],"american");',
        "recipes": {
            "cheeseburger": {
                "name": "All-American Cheeseburger",
                "img": "images/american.png",
                "tags": ["beef", "bread"],
                "onclick": 'displayRecipe(recipes["american"],"cheeseburger");',
                "ingredients": [
                    "16 oz. beef", 
                    "2g salt", 
                    "1 white bun"
                ],
                "instructions": [
                    "Make food",
                    "Eat Food",
                    "???",
                    "Profit"
                ]
            },
            "frenchfries": {
                "name": "Super Salty Fries",
                "img": "images/american.png",
                "tags": ["side", "potatoes", "vegetarian"],
                "onclick": 'displayRecipe(recipes["american"],"frenchfries");',
                "ingredients": [
                    "1 dozen potatoes", 
                    "2g salt", 
                    "1 gallon oil"
                ],
                "instructions": [
                    "Make food",
                    "Eat Food",
                    "???",
                    "Profit"
                ]
            }
        },
    },
    "chinese": {
        "name": "Chinese",
        "img": "images/chinese.png",
        "tags": [],
        "onclick": 'populate(recipes["chinese"]["recipes"]);',
        "recipes": {
            "chowmein": {
                "name": "Chow Mein",
                "img": "images/chinese.png",
                "tags": [""],
                "onclick": 'displayRecipe(recipes["chinese"],"chowmein");',
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
    },
    "filipino": {
        "name": "Filipino",
        "img": "images/filipino.png",
        "tags": [],
        "onclick": 'populate(recipes["filipino"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/filipino.png",
                "tags": [""],
                "onclick": 'displayRecipe(recipes["filipino"],"dish a");',
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
    },
    "french": {
        "name": "French",
        "img": "images/french.png",
        "tags": [],
        "onclick": 'populate(recipes["french"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/french.png",
                "tags": [""],
                "onclick": 'displayRecipe(recipes["french"],"dish a");',
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
    },
    "irish": {
        "name": "Irish",
        "img": "images/irish.png",
        "tags": [],
        "onclick": 'populate(recipes["irish"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/irish.png",
                "tags": [""],
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
    },
    "italian": {
        "name": "Italian",
        "img": "images/italian.png",
        "tags": [],
        "onclick": 'populate(recipes["italian"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/italian.png",
                "tags": [""],
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
    },
    "japanese": {
        "name": "Japanese",
        "img": "images/japanese.png",
        "tags": [],
        "onclick": 'populate(recipes["japanese"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/japanese.png",
                "tags": [""],
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
    },
    "mexican": {
        "name": "Mexican",
        "img": "images/mexican.png",
        "tags": [],
        "onclick": 'populate(recipes["mexican"]["recipes"]);',
        "recipes": {
            "disha": {
                "name": "Dish A",
                "img": "images/mexican.png",
                "tags": [""],
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
    },
    "southafrican": {
        "name": "South African",
        "img": "images/southafrican.png",
        "tags": [],
        "onclick": 'populate(recipes["southafrican"]["recipes"]);',
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
    },
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