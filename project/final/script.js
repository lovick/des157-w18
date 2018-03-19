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

function imgOver() {
    //console.log(this.children[0]);
    this.style.border = "3px solid #00ff00";
}

function imgOff() {
    //console.log(this.children[0]);
    this.style.border = "";
}

function displayRecipe(arr, ind) {
    var filt = document.getElementById("filtList").innerHTML = "";
    var content = document.getElementById("content");
    var recipe = arr["recipes"][ind];

    var outStr = `
    <img src="`+recipe["img"]+`" alt="`+arr["name"]+`">
    <article>
    <h2>`+recipe["name"]+`</h2>
    <h4>An `+arr["name"]+` Recipe</h4>
    <ol>
    `;

    var ins = recipe["instructions"];
    for (var s in ins) {
        outStr += `<li>`+ins[s]+`</li>`;
    }

    outStr += `
    </ol>
    </article>
    <aside>
    <h3>Ingredients</h3>
    <ul>
    `;

    var ing = recipe["ingredients"];
    for (var i in ing) {
        outStr += `<li>`+ing[i]+`</li>`;
    }

    outStr += `
    </ul>
    </aside>
    `;

    content.setAttribute("class", "recipe");
    content.innerHTML = outStr;

    history.pushState(recipe["name"], null, window.location.href);
}

function populateFilterList(arr) {
    var tagList = [];
    for (var c in arr) {
        for (var t in arr[c]["tags"]) {
            if (tagList.indexOf(arr[c]["tags"][t]) < 0) {
                tagList.push(arr[c]["tags"][t]);
            }
        }
    }
    
    var list = document.getElementById("filtList");
    var outStr = `
    <h2>Filter</h2>
    <p>Click a tag to filter</p>
    <ul>
    `;
    for (var ind in tagList) {
        var t = tagList[ind];
        outStr += `<li onclick="filter(recipes, '`+t+`')">`+t+`</li>`;
    }
    list.innerHTML = outStr;
}

// for going another layer deeper
// TODO: track active filters
function filter(arr, tag) {
    var filArr = {};
    var nArr = arr;
    if (history.state != "top") {
        nArr = arr[history.state]["recipes"];
    }
    for (var key in nArr) {
        if (key != "name" && nArr[key]["tags"].indexOf(tag) >= 0) {
            filArr[key] = nArr[key];
        }
    }
    populateHelp(filArr);
}

function populate(arr, name) {
    populateHelp(arr);
    history.pushState(name, null, window.location.href);
    populateFilterList(arr);
}

// needed to split out because history was just being readded repeatedly
function populateHelp(arr) {
    var grid = document.getElementById("content");
    grid.setAttribute("class", "imgGrid");
    grid.innerHTML = "";
    for (var key in arr) {
        if (arr[key] == "top") {
            continue;
        }
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

populate(recipes, "top");

var logo = document.getElementById("logo").addEventListener("click", function() { populate(recipes, "top"); } );

window.addEventListener('popstate', function(e) {
    console.log(e);
    e.preventDefault();
    if (e.state == "top") {
        populateHelp(recipes);
        populateFilterList(recipes);
    } else {
        populateHelp(recipes[e.state]["recipes"]);
        populateFilterList(recipes[e.state]["recipes"]);
    }
});