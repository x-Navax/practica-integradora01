const socket = io()

console.log(" 🚀 ~ ", "Connected!")
let user;
window.onload = () =>{

    Swal.fire({
        title: 'Identificate',
        text: 'Ingrese su nombre de usuario',
        input: 'text',
        inputValidator:(value)=>{
            return !value && "Escribi tu nombre!"
        },
        confirmButtonText: 'OK'
      }).then ((result)=>{
        console.log(result)
        user = result.value
        socket.emit("auth",user)
      })

}

const chatbox = document.getElementById("chatbox")
const log = document.getElementById("log")

chatbox.addEventListener("keyup",e => {
    if(e.key === "Enter"){
        console.log(chatbox.value)
        socket.emit("message", {user:user, message: chatbox.value})
    }
})

socket.on("messageLogs", data =>{
    let messages = ""
    data.forEach(msg => {
        messages += `${msg.user} dice ${msg.message}<br/>`
    })
    
    log.innerHTML=messages
})