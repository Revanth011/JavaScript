const count = document.querySelector('.count');
const options = document.querySelector('.options');
console.log(options);
options.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }
});