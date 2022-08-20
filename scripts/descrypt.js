let btnDescrypt = document.querySelector("#btn-descrypt");


btnDescrypt.addEventListener("click", ()=>{
    
    document.getElementById("tarea-descrypt").innerHTML =""
    
    let message = document.getElementById("tarea-encrypt").value;
    console.log(message)
    
    let arr = ["ai","enter", "imes", "ober", "ufat"]
     
    for (let index = 0; index < arr.length; index++) {
        
        if(message.includes(arr[index])){
        
     
        switch(arr[index]){ 
            case "ai":
                message = message.replaceAll("ai","a")
                break;
            case "enter":
                message = message.replaceAll("enter", "e")
                break;
            case "imes":
                message = message.replaceAll("imes","i" )
                break;
            case "ober":
                message = message.replaceAll("ober","o")
                break;
            case "ufat":
                message = message.replaceAll("ufat","u")
                break;
            default:
                break;  
        }
    }
     }
    
    document.getElementById("tarea-descrypt").innerHTML = message;
    
    
})