const changeFontSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

changeFontSize.addEventListener("input", (event) => {
    console.log(event);

    textSize.style.fontSize = event.target.value + "px";
});