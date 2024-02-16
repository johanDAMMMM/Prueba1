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
    var video = document.getElementById("reproductorVideo")

    output.textContent = "Archivo seleccionado " +input.files[0].name;

    var fileURL = URL.createObjectURL(input.files[0]);
    video.src = fileURL;
}
