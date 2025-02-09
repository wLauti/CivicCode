window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let maxScroll = 600;
    let opacity = Math.max(1 - scrollTop / maxScroll, 0);
    document.getElementById("video-fondo").style.opacity = opacity;
});
