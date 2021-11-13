const model = document.querySelector('.model')
const btn = document.querySelector('.btn')
const close = document.querySelector('.close')

btn.addEventListener('click', (e) => {
    modal.style.display = 'block';
    e.preventDefault();
})
close.addEventListener('click', (e) => {
    modal.style.display = 'none';
    e.preventDefault();
})
