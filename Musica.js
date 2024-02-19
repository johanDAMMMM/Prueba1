function mostrarAudio(){
    var input = document.getElementById("fileInput");
    var output = document.getElementById("nombreArchivo");
    var audio = document.getElementById("reproductorAudio");
    var contenedorAudio = document.getElementById("contenedorAudio");

    output.textContent = "Archivo seleccionado: " +input.files[0].name;

    var fileURL = URL.createObjectURL(input.files[0]);
    audio.src = fileURL;

    contenedorAudio.style.display = "block";

}