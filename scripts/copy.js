let btnCopy = document.querySelector("#btn-copy");

btnCopy.addEventListener("click", () =>{
    let copiedMessage = document.getElementById("tarea-descrypt")
    copiedMessage.select();
    document.execCommand('copy');
})