document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("miVideo");
    var controlVolumen = document.getElementById("miVideo");
});

controlVolumen.addEventListener("input", function() {
    video.volumen = controlVolumen.value;
})

function mostrarNombreArchivo(){
    var input = document.getElementById("fileInput");
    var output = document.getElementById("nombreArchivo");
    var video = document.getElementById("reproductorVideo");
    var contenedorVideo = document.getElementById("contenedorVideo");


    output.textContent = "Archivo seleccionado " +input.files[0].name;

    var fileURL = URL.createObjectURL(input.files[0]);
    video.src = fileURL;

    localStorage.setItem("videoURL", fileURL);

    contenedorVideo.style.display = 'block';
}

window.onload = function () {
    var storedVideoURL = localStorage.getItem("videoURL");
    if (storedVideoURL) {
        var video = document.getElementById("reproductorVideo");
        var contenedorVideo = document.getElementById('contenedorVideo');
        video.src = storedVideoURL;
        contenedorVideo.style.display = "block";

        var output = document.getElementById("nombreArchivo");
        var fileName = storedVideoURL.split("/").pop();
        output.textContent = "Archivo seleccionado: " +fileName;
    }
}
