document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("miVideo");
    var controlVolumen = document.getElementById("miVideo");
});

controlVolumen.addEventListener("input", function() {
    video.volumen = controlVolumen.value;
})
