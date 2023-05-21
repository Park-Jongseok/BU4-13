const h1 = document.querySelector(".title h1");

const handleClick = () => {
    const clickedClassName = "clicked";
    if (h1.classList.contains(clickedClassName)) {
        h1.classList.remove(clickedClassName);
    } else {
        h1.classList.add(clickedClassName);
    }
};

h1.addEventListener("click", handleClick);
