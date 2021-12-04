function updateValue(){
    document.getElementById("header").textContent = document.getElementById("inputBox").value
    console.log(document.getElementById("inputBox").value)
}

document.getElementById("button").addEventListener("click", updateValue)











