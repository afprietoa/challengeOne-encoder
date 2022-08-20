let btnEncrypt = document.querySelector("#btn-encrypt");

function result(show){
    document.getElementById("tarea-descrypt").style.display = show;
    document.getElementById("btn-copy").style.display = show;
}

result("none")

btnEncrypt.addEventListener("click", ()=>{
    document.getElementById("board").style.display = "none";

    let message = document.getElementById("tarea-encrypt").value;

    let msm =""
    for (let index = 0; index < message.length; index++) {
        
       
        switch(message.charAt(index)){ 
            case "a":
                msm += message.charAt(index).replace("a", "ai")
                break;
            case "e":
                msm += message.charAt(index).replace("e", "enter")
                break;
            case "i":
                msm += message.charAt(index).replace("i", "imes" )
                break;
            case "o":
                msm += message.charAt(index).replace("o", "ober")
                break;
            case "u":
                msm += message.charAt(index).replace("u", "ufat")
                break;
            default:
                msm += message.charAt(index)     
        }
    }

    document.getElementById("tarea-descrypt").innerHTML = msm;

    result("")
})