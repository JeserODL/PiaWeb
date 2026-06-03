console.log("Portal Cargado Correctamente.")

function toggleCampus(id) {
    let campus =
        document.getElementById(id);

    if (campus.style.display === "block") {
        campus.style.display = "none";
    } else {
        campus.style.display = "block";
    }
}

function toggleFacultad(id) {
    let facultad =
        document.getElementById(id);

    if (facultad.style.display === "block") {
        facultad.style.display = "none";
    } else {
        facultad.style.display = "block";
    }
}