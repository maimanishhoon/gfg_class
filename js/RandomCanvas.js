let container = document.querySelector('.container');

container.addEventListener("Click", (e) => {
    // console.log("Btn was click");
    let circle = document.createElement("div");

    circle.classList.add("circle");
    circle.style.left = element.clientX - 50 + "px";
    circle.style.left = element.clienty - 50 + "px";
    container.appendChild(circle)
});