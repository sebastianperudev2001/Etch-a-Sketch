//El color de pincel toma por defecto el valor inicial por defecto puesto (o sea rojo)
let colorPincel = document.getElementById("color-input").value;

//Cada vez que se realice el evento de input, la variable global se actualizara con el valor actual ingresado
const updateFirst = (event) => 
{
    colorPincel = document.getElementById("color-input").value;
}


//Se aprovechan las clases predefinidas de bootstrap para poder crear columnas y filas en el div grid
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

//Cada vez que se entra al div, el backgroundcolor varía
const hoverEffect = (event) => 
{
    const area = event.target; 
    area.style.backgroundColor = colorPincel;
}


//Permite borrar todo el grid mediante un inner loop a todos los cuadrillos
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

    //A cada cuadrito se le otorga el evento hover 
    for (let i = 1; i <= 10; i++) 
    {
        for (let j = 1; j <= 10; j++) 
        {
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", hoverEffect);
        }
        
    }

    document.getElementById("but-clear").addEventListener("click", clearEffect);
    document.getElementById("color-input").addEventListener("input", updateFirst, false); 
    
}

window.onload = main; 