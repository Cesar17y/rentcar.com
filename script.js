document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".contenedor").forEach(carro=>{    
            carro.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?carro.classList.remove("filtro")
            :carro.classList.add("filtro")
        })
    }

    
})
