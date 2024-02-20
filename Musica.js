function mostrarAudio(){
    var input = document.getElementById("fileInput");
    var output = document.getElementById("nombreArchivo");
    var audio = document.getElementById("reproductorAudio");
    var contenedorAudio = document.getElementById("contenedorAudio");
    var generoInput = document.getElementById("generoInput").value;
    var nombreCancionInput = document.getElementById("nombreCancionInput").value;
    var descripcionInput = document.getElementById("descripcionInput").value;

    output.textContent = "Archivo seleccionado: " +input.files[0].name;

    var fileURL = URL.createObjectURL(input.files[0]);
    audio.src = fileURL;

    contenedorAudio.style.display = "block";

    console.log("Genero:",generoInput);
    console.log("Nombre de la canción:",nombreCancionInput);
    console.log("Descripción:",descripcionInput);

}