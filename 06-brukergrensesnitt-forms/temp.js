const skjema = document.querySelector("#velgFlyplass");
let selectFlyplass = document.querySelector("#Flyplasser");

skjema.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log(selectFlyplass.value);
    console.log(selectFlyplass.selectedIndex);
});