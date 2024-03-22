function bgChange(color) {
    let colorArray = ["#e58e26", "#f9b4ab", "#b1fb17", "#78e08f", "#fd79a8"];
    document.body.style.background = colorArray[color];
}

function bgChangePrimary(color) {
    let primaryColors = ["red", "blue", "yellow"];
    document.body.style.background = primaryColors[color];
}

function bgChangeSecondary(color) {
    let secondaryColors = ["orange", "green", "purple"];
    document.body.style.background = secondaryColors[color];
}

let colorArray = ["#e58e26", "#f9b4ab", "#b1fb17", "#78e08f", "#fd79a8"];
let colorbox = document.getElementById("colorbox");

colorArray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgChange(index);
    });
    colorbox.appendChild(span);
});

let primaryColors = ["red", "blue", "yellow"];
let primaryColorBox = document.getElementById("primaryColorBox");

primaryColors.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgChangePrimary(index);
    });
    primaryColorBox.appendChild(span);
});

let secondaryColors = ["orange", "green", "purple"];
let secondaryColorBox = document.getElementById("secondaryColorBox");

secondaryColors.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgChangeSecondary(index);
    });
    secondaryColorBox.appendChild(span);
});
