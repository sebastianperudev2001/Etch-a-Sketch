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
            fila.appendChild(cuadrado)
        } 
        contenedor.appendChild(fila)
    }
}   

const main = () => 
{
    createGrid(); 
}

window.onload = main; 