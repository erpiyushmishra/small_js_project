const colors = ["blue", "green", "red", "black", "coral", "brown", "pink", "violet", "gray", "yellow"];

const btn=document.querySelector(".btn");
const container= document.querySelector(".container");

const color_change = ()=>{
    for (let i; i<colors.length; i++){
        return colors[i]
    }

}

btn.addEventListener("click", ()=>{
    container.style.background=colors[Math.floor(Math.random()*10)]
})
