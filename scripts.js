const createGrid = () => 
{
    const contenedor = document.getElementById("grid");
    for (let i = 1; i <= 10; i++) 
    {
        let fila = document.createElement("div");
        fila.setAttribute("id","fila");
        fila.setAttribute("class", "row");
        for (let j = 1; j <= 10; j++) 
        {
            let cuadrado = document.createElement("div");
            cuadrado.innerText= " ";
            cuadrado.setAttribute("class", "col");
            cuadrado.setAttribute("id", `${i},${j}`)
            fila.appendChild(cuadrado)
        }  
        contenedor.appendChild(fila)
    }
}   

const hoverEffect = (event) => 
{
    const area = event.target; 
    area.style.backgroundColor = "red";
}

const clearEffect = (event) => 
{
    for (let i = 1; i <= 10; i++) 
    {
        for (let j = 1; j <= 10; j++) 
        {
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        }
    }
}

const main = () => 
{
    createGrid(); 
    for (let i = 1; i <= 10; i++) 
    {
        for (let j = 1; j <= 10; j++) 
        {
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", hoverEffect);
        }
        
    }

    document.getElementById("but-clear").addEventListener("click", clearEffect);
    
}

window.onload = main; 