const fileInput = document.getElementById("fileInput");
const botonSubir = document.getElementById("botonSubir");

botonSubir.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
});

const formData = new FormData();
formData.append("file", file);

fetch("/subir", {
    method: "POST",
    body: formData,
});

function pdf() {
    if (botonSubir === ":pdf"){
        alert("Libro subido correctamente");
        return true;
    };
};