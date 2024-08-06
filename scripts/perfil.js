import putData from "../scripts/helpers/putData.js"
import { USUARIOS } from "../scripts/helpers/urls.js"

let infoUser = JSON.parse(sessionStorage.getItem("infoUser"));
let inputName=document.getElementById("name")
let inputEmail=document.getElementById("email")

let btnEdit = document.getElementById("editar")
let btnGuardar = document.getElementById("guardar")
let btnEliminar = document.getElementById("eliminar")

let form = document.querySelector("form")


document.addEventListener("DOMContentLoaded", () =>{
    
    const {id, nombre,email}=infoUser
inputName.value=nombre;
inputEmail.value=email

btnEliminar.setAttribute("id",id)
})


btnEdit.addEventListener("click" , ()=>{
    inputName.removeAttribute("disabled");
    inputEmail.removeAttribute("disabled")

    btnGuardar.classList.remove("d-none")
    btnEdit.classList.add("d-none")
})

form.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const {id} = infoUser;

    let objUser={
        name: inputName,
        email: inputEmail,
    }

    await putData(`${USUARIOS}/${id}`, objUser)
})