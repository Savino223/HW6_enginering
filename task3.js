function zoomImage(img) {
    const zoomed = document.getElementById("zoomed");
    const zoomedImg = document.getElementById("zoomedImg");

    zoomedImg.src = img.src;
    zoomed.style.display = "block";
    zoomed.onclick = function() {
        zoomed.style.display = "none";
    };
}
