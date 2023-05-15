const h1 = document.querySelector(".title h1:first-child");
// console.log(h1);
// console.dir(h1);

const handleClick = () => {
    h1.style.color = "orange";
};

const handleMouseEnter = () => {
    h1.style.color = "red";
    h1.innerText = "マウスが入りました。";
};

const handleMouseLeave = () => {
    h1.style.color = "coral";
    h1.innerText = "マウスが離れました。";
};

const handleWindowResize = () => {
    document.body.style.backgroundColor = "tomato";
};

const handleOffline = () => {
    alert("オフラインです。");
    console.log("オフラインです。");
};

const handleOnline = () => {
    alert("オンラインです。");
    console.log("オンラインです。");
};

const handleCopy = () => {
    alert("コピーイベント発生");
};

const lastChildH1 = document.querySelector(".title h1:last-child");
lastChildH1.onclick = handleClick;

h1.addEventListener("click", handleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);
window.addEventListener("copy", handleCopy);
