function setBackground(){
    var postBackground = document.getElementById("postBackground");

    postBackground.style.backgroundImage = `url(${event.target.src})`
    // console.log(event.target.src)
}
function changeColor(){
    var postBackground = document.getElementById("postBackground");
    postBackground.style.color =event.target.value
    // console.log(event.target.value)
}

function changeStyle(){
    var postBackground = document.getElementById("postBackground")
    var type = event.target.innerText;
    if(type === "B"){
        if(postBackground.style.fontWeight==="bold"){
            postBackground.style.fontWeight = "normal"
        }
        else{
            postBackground.style.fontWeight="bold"
            event.target.style.backgroundColor = "green"
        }
    }

   
        if(type === "I"){
            if(postBackground.style.fontStyle==="italic"){
                postBackground.style.fontStyle = "normal"
            }
            else{
                postBackground.style.fontStyle="italic"
                event.target.style.backgroundColor = "green"
            }
        }
       
            if(type === "U"){
                if(postBackground.style.textDecoration==="underline"){
                    postBackground.style.textDecoration = "normal"
                }
                else{
                    postBackground.style.textDecoration="underline"
                    event.target.style.backgroundColor = "green"
                }
            }}