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
    this.style.border = "3px solid #000000";
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
    <h4>A `+arr["name"]+` Recipe</h4>
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

var tagHovers = [];
function populateFilterList(arr) {
    var tagList = [];
    tagHovers = [];
    for (var c in arr) {
        for (var t in arr[c]["tags"]) {
            if (tagList.indexOf(arr[c]["tags"][t]) < 0) {
                tagList.push(arr[c]["tags"][t]);
            }
        }
    }

    tagList.sort();
    
    var list = document.getElementById("filtList");
    var outStr = `
    <h2>Filter</h2>
    <p>Click a tag to filter</p>
    <ul>
    `;
    for (var ind in tagList) {
        var t = tagList[ind];
        outStr += `<li class="tag" onclick="filter(recipes, '`+t+`')">`+t+`</li>`;
    }
    if (tagList.length == 0) {
        outStr = "";
    }
    list.innerHTML = outStr;

    var tags = document.getElementsByClassName("tag");
    for (var i = 0; i < tags.length; i++) {
        tagHovers[i] = anime({
            targets: tags[i],
            translateX: 20,
            duration: 500,
            autoplay: false
        });
        tags[i].addEventListener("click", tagHovers[i].play);
    }
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

function preAnimate() {
    var links = document.getElementsByClassName("foodLink");
    if (links.length == 0) {
        return false;
    }
    console.log(links);
    for (var l in links) {
        if (l == "length" || l == "item" || l == "namedItem") {
            continue;
        }
        links[l].classList.add("old");
    }

    anime({
        targets: ".old",
        translateY: [
            { value: 10, duration: 1000 }
        ],
        rotate: "1turn",
        duration: 1000
    });
}

function populate(arr, name) {
    //preAnimate();
    populateHelp(arr);
    history.pushState(name, null, window.location.href);
    populateFilterList(arr);
    /*anime({
        targets: ".foodLink",
        translateY: [
            { value: 100, duration: 1200 },
            { value: 0, duration: 800 }
        ],
        rotate: "1turn",
        duration: 2000
    });*/
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
            <a class="foodLink" onclick=`+arr[key]["onclick"]+` id="`+key+`">
                <img src="`+arr[key]["img"]+`">
            </a>
            <h3>`+arr[key]["name"]+`</h3>
        </article>
        `;
    }
    addHovers();
}

var buttons;
var hovers = [];
function addHovers() {
    buttons = document.getElementsByClassName("foodLink");
    for (var i = 0; i < buttons.length; i++) {
        hovers[i] = anime({
            targets: "#"+buttons[i].id,
            scale: 1.1,
            translateY: -5,
            duration: 1000,
            autoplay: false
        });
        buttons[i].addEventListener("mouseover", hovers[i].play);
        buttons[i].addEventListener("mouseout", hovers[i].reverse);
    }
}

populate(recipes, "top");

var logoAnim = anime({
    targets: "#logo",
    translateX: 10,
    scale: 1.05,
    duration: 1000,
    autoplay: false
});
var logo = document.getElementById("logo");
logo.addEventListener("click", function() { populate(recipes, "top"); });
logo.addEventListener("mouseover", logoAnim.play);
logo.addEventListener("mouseout", logoAnim.reverse);

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

/*anime({
    targets: ".foodLink",
    translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }
    ],
    rotate: "1turn",
    duration: 2000
});*/