const h1 = document.querySelector(".title h1");

const handleClick = () => {
    h1.classList.toggle("clicked");
};

h1.addEventListener("click", handleClick);
