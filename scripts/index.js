import { USUARIOS } from "./helpers/urls.js"
import getData from "./helpers/getData.js"

let intro = document.querySelector(".intro")
let logo = document.querySelector(".logo-header")
let logoSpan=document.querySelectorAll(".logo")
let imagen=document.querySelector(".imagenlogo")
const form = document.querySelector("form")


window.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(() => {
        logoSpan.forEach((span,idx)=>{
            setTimeout(() => {
                span.classList.add("active")
            },(idx+1)*400);
        })

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{

                setTimeout(() => {
                    span.classList.remove("active")
                    span.classList.add("fade")
                },(idx+1)*50 );
            })

            
        }, 2000);
        setTimeout(() => {
            intro.style.top="-100vh"
        }, 2300);
    }, );
})

form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value

    const dataUsuario = await getData(USUARIOS)

    const result = dataUsuario.find((fi)=> fi.email=== email)

    if(result !== undefined){
        sessionStorage.setItem("infoUser", JSON.stringify(result))
        form.reset()
        window.location.replace("../pages/home.html")
    }else{
        alert("email incorrecto")
        form.reset()
    }
})