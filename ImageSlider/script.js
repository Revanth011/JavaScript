var indexVal = 1;
showImg(1);
function side_slide(e) {
    showImg(indexVal += e);
}
function showImg(e) {
    const img = document.querySelectorAll('img');
    if (e > img.length) indexVal = 1;
    if (e < 1) indexVal = img.length;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    console.log(indexVal);
    img[indexVal - 1].style.display = "block";
}