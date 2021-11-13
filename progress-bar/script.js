const progress = document.querySelector('.progress');
const loading = document.querySelector('.loading');
const fakeUpload = [2, 4, 14, 22, 34, 56, 76, 99, 100];
let i = 0;
const interval = setInterval(() => {
    progress.style.width = fakeUpload[i] + '%';
    loading.innerHTML = fakeUpload[i] + '%';
    i++;
    if (i == fakeUpload.length) {
        loading.innerHTML = 'Completed';
        clearInterval(interval);
    }
}, 500)
