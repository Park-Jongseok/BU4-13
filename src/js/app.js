const h1 = document.querySelector(".title h1");

const handleClick = () => {
    const clickedClassName = "clicked";
    if (h1.className !== clickedClassName) {
        h1.className = clickedClassName;
    } else {
        h1.className = "";
    }
};

h1.addEventListener("click", handleClick);
