const title = document.querySelector(".title:first-child h1");
console.log(title);
console.dir(title);

const handleClick = () => {
    title.style.color = "orange";
};

title.addEventListener("click", handleClick);
