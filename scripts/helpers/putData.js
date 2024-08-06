const putData = async(url, datos)=>{
    try {
        await axios.put(url,datos)
        alert("usuario modificado")
    } catch (error) {
        console.error(error)

    }
}
export default putData