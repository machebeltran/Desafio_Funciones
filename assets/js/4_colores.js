function cambiarColorNegro(element) {
    element.style.backgroundColor = "black"
}

const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const div4 = document.getElementById("div4")

div1.addEventListener("click", function() { cambiarColorNegro(div1); })
div2.addEventListener("click", function() { cambiarColorNegro(div2); })
div3.addEventListener("click", function() { cambiarColorNegro(div3); })
div4.addEventListener("click", function() { cambiarColorNegro(div4); })
