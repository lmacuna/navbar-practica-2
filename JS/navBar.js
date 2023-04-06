var cambio = false;


const span = () => {
    if (cambio) {
        document.querySelector("#inicio").classList.add("span-on")
        document.querySelector("#perfil").classList.add("span-on")
        document.querySelector("#estudios").classList.add("span-on")
        document.querySelector("#experiencia").classList.add("span-on")
        document.querySelector("#proyectos").classList.add("span-on")
        document.querySelector("#checkbox").classList.add("rotar-icon")
        cambio = false
    } else if (!cambio) {
        document.querySelector("#inicio").classList.remove("span-on")
        document.querySelector("#perfil").classList.remove("span-on")
        document.querySelector("#estudios").classList.remove("span-on")
        document.querySelector("#experiencia").classList.remove("span-on")
        document.querySelector("#proyectos").classList.remove("span-on")
        document.querySelector("#checkbox").classList.remove("rotar-icon")
        cambio = true

    }
}

span()