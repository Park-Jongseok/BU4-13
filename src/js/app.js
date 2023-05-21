const h1 = document.querySelector(".title h1");

const handleClick = () => {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "coral") {
        newColor = "blue";
    } else {
        newColor = "coral";
    }
    h1.style.color = newColor;
    console.log(currentColor);
};

h1.addEventListener("click", handleClick);
