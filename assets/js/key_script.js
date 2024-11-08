const keyDiv = document.getElementById("key");
let color

document.addEventListener("keydown", function(event) {
    if (event.key === 'a') {
        color = 'pink';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'lightblue';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
})

function crearDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "2px solid black";
    document.body.appendChild(newDiv);
}
