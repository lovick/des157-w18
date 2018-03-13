// each culture has:
// name
// img
// tags [ array ]
// onclickfunc
// recipes { json array }

// each recipe has:
// name
// img ref
// tags [array]
// onclickfunc
// ingredients [array]
// instructions ` multi line string `
var recipes = {
    "american": {
        "name": "American",
        "img": "images/american.png",
        "tags": [],
        "onclick": 'populate(recipes["american"]["recipes"]);',
        "recipes": {
            "cheeseburger": {
                "name": "All-American Cheeseburger",
                "img": "images/american.png",
                "tags": ["beef", "bread"],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["16 oz. beef", 
                    "2g salt", 
                    "1 white bun"],
                "instructions": `
                Step 1: Make food
                Step 2: Eat Food
                Step 3: ???
                Step 4: Profit
                `
            },
            "frenchfries": {
                "name": "Super Salty Fries",
                "img": "images/american.png",
                "tags": ["side", "potatoes", "vegetarian"],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["1 dozen potatoes", 
                    "2g salt", 
                    "1 gallon oil"],
                "instructions": `
                Step 1: Make food
                Step 2: Eat Food
                Step 3: ???
                Step 4: Profit
                `
            }
        }
    },
    "chinese": {
        "name": "Chinese",
        "img": "images/chinese.png",
        "tags": ["vegetarian"],
        "onclick": 'populate(recipes["chinese"]["recipes"]);',
        "recipes": {
            "chowmein": {
                "name": "Chow Mein",
                "img": "images/chinese.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "filipino": {
        "name": "Filipino",
        "img": "images/filipino.png",
        "tags": [],
        "onclick": 'populate(recipes["filipino"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/filipino.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "french": {
        "name": "French",
        "img": "images/french.png",
        "tags": [],
        "onclick": 'populate(recipes["french"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/french.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "irish": {
        "name": "Irish",
        "img": "images/irish.png",
        "tags": [],
        "onclick": 'populate(recipes["irish"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/irish.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "italian": {
        "name": "Italian",
        "img": "images/italian.png",
        "tags": [],
        "onclick": 'populate(recipes["italian"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/italian.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "japanese": {
        "name": "Japanese",
        "img": "images/japanese.png",
        "tags": [],
        "onclick": 'populate(recipes["japanese"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/japanese.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "mexican": {
        "name": "Mexican",
        "img": "images/mexican.png",
        "tags": ["vegetarian"],
        "onclick": 'populate(recipes["mexican"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/mexican.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
    "southafrican": {
        "name": "South African",
        "img": "images/southafrican.png",
        "tags": [],
        "onclick": 'populate(recipes["southafrican"]["recipes"]);',
        "recipes": {
            "dish a": {
                "name": "Dish A",
                "img": "images/southafrican.png",
                "tags": [""],
                "onclick": 'location.href="recpTemp.html";',
                "ingredients": ["2 cups noodles",
                    "1 egg"],
                "instructions": `
                Step 1: Go to a Chinese Restaurant instead
                Step 2: Eat
                `
            },
        }
    },
};

function imgOver() {
    //console.log(this.children[0]);
    this.style.border = "3px solid #00ff00";
}

function imgOff() {
    //console.log(this.children[0]);
    this.style.border = "";
}

function filter(arr, tag) {
    var filArr = {};
    for (var key in arr) {
        if (arr[key]["tags"].indexOf(tag) >= 0) {
            filArr[key] = arr[key];
        }
    }
    populate(filArr);
}

function populate(arr) {
    var grid = document.getElementById("imgGrid");
    grid.innerHTML = "";
    for (var key in arr) {
        grid.innerHTML += `
        <article>
            <a class="foodLink" onclick=`+arr[key]["onclick"]+`>
                <img src="`+arr[key]["img"]+`">
            </a>
            <h3>`+arr[key]["name"]+`</h3>
        </article>
        `;
    }
    addHovers();
}

function addHovers() {
    var buttons = document.getElementsByClassName("foodLink");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mouseover", imgOver);
        buttons[i].addEventListener("mouseout", imgOff);
    }
}

populate(recipes);

var logo = document.getElementById("logo").addEventListener("click", function() { populate(recipes); } );
var filtBar = document.getElementById("filtBar");
