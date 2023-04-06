const imagen=()=>{
    document.querySelector("#root-1").innerHTML=`
    <img id="img-inicio" class="img-inicio" src="images/img-mi-perfil-linkedin-recortada.jpeg" alt="foto-lucas"></img>
    <span class="span-img">Lucas Martín Acuña</span><br>
    <div class="contactos"><a target="_blank" href="https://www.linkedin.com/in/lucas-mart%C3%ADn-acu%C3%B1a-270776148/" style="color:white"><i class="fa-brands fa-linkedin-in"></i></a><a href="https://github.com/lmacuna" target="_blank" style="color:white"><i class="fa-brands fa-github"></i></a><a href="https://www.whatsapp.com/" target="_blank" style="color:white"><i class="fa-brands fa-whatsapp"></i></a><a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe" target="_blank" style="color:white"><i class="fa-regular fa-envelope"></i></a></div>
    `
}

const video=()=>{
    document.querySelector("#root-2").innerHTML=`
    <div id="video">
    <iframe class="iframe" src="https://www.youtube.com/embed/0nPWfJyDIIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
    </div>
    `
}

const rotar_img=()=>{
     document.querySelector("#img-inicio").classList.add("img-inicio-rotar")
}


imagen()
video()

setTimeout(()=>{
    rotar_img()
},1000)