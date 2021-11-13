const btn = document.querySelector(".btn-generate");
const count = document.querySelector(".count-color");

btn.addEventListener('click', () => {
    const ran_color = Math.random().toString(16).substring(2, 8);
    count.innerHTML = "#" + ran_color;
    document.body.style.background = "#" + ran_color;
});

