import postData from "../scripts/helpers/postData.js"
import { USUARIOS } from "../scripts/helpers/urls.js"

const form = document.querySelector("form")
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const email=document.getElementById("email").value
    const nombre=document.getElementById("name").value

    let objUser={
        id:Math.floor(Math.random()*100),
        email,
        nombre,
        vidas:0,
        correctas:0,
        incorrectas:0
    }

    await postData(USUARIOS,objUser)

    window.location.replace("../index.html")
})