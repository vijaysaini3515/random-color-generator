

const generator = () =>{
    let rendomColor = Math.floor(Math.random()*16777215);
    let rendomCode = "#"+rendomColor.toString(16)
    document.getElementById("color-code").innerHTML = rendomCode;
    document.body.style.backgroundColor = rendomCode;

    navigator.clipboard.writeText(rendomCode)//copy the hex code in keyboard/clipboard
}

document.getElementById("btn").addEventListener("click",generator)

generator()