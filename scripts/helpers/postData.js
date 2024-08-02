const postData= async(url, datos)=>{
    try {
        const response = await axios.post(url,datos)
        return response
    } catch (error) {
        console.error(error)
    }
}

export default postData