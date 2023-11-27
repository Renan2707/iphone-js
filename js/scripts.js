const buttons = document.querySelectorAll("#image-picker li")
const imagem = document.querySelector("#product-image")

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

        buttons.forEach((btn)=>{
            btn.querySelector(".color").classList.remove("ring-2", "ring-blue-400", "ring-offset-4")
        })
        const button = e.target;
        button.classList.add("ring-2","ring-blue-400", "ring-offset-4")
        const id =button.id;
        
        imagem.classList.add("opacity-50");
        imagem.setAttribute("src",`img/iphone_${id}.jpg`);

        setTimeout(()=>{
            imagem.classList.toggle("opacity-50")
        },200)
        console.log(button)
    })
})