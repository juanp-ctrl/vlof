let menu, imagen;
window.onload = ()=>{

menu = document.getElementById("cabecera");
imagen = document.getElementById("img-main");

    window.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 30){
            menu.classList.add("header2");
            imagen.setAttribute("src", "img/logo_v1.png");
            document.getElementById("contenido-main").style.paddingTop = "400px";
            document.getElementById("titulo-main").style.paddingTop = "0px";
        }
        else{
            menu.classList.remove("header2");
            imagen.setAttribute("src", "img/logo_vlof_sin_fondo_v2.png");
            document.getElementById("contenido-main").style.paddingTop = "400px";
            document.getElementById("titulo-main").style.paddingTop = "70px";
        }
    });

}