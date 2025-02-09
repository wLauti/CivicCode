function descargarArchivo1() {
    const enlace = document.createElement("a");
    enlace.href = "../../Assets/Downloads/UrVote_Setup.exe";
    enlace.download = "UrVote_Setup.exe";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

function descargarArchivo2() {
    const enlace = document.createElement("a");
    enlace.href = "../../Assets/Downloads/UrVote.zip";
    enlace.download = "UrVote.zip";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}