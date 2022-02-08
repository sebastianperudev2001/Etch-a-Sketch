var slider = document.getElementById("myRange");
var output = document.getElementById("demo");



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  slider.value = this.value;
}

//Variable globals para seleccionar el tamaño del grid
let x = 20;
let y = 20; 

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
    
    let metricaComun = 960/x; 
    console.log(metricaComun);
    for (let i = 1; i <= x; i++) 
    {
        let fila = document.createElement("div");
        fila.setAttribute("id","fila");
        //fila.setAttribute("class", "row");
        fila.style.height = `${metricaComun}px`;
        //fila.setAttribute("height", `${altura}%`);

        for (let j = 1; j <= y; j++) 
        {
            let cuadrado = document.createElement("div");
            cuadrado.innerText= " ";
            cuadrado.setAttribute("class", "columna");
            cuadrado.setAttribute("id", `${i},${j}`)
            cuadrado.style.width = `${metricaComun}px`; 
            //cuadrado.setAttribute("width", `${ancho}%`)
            
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

const colorButton = () => 
{
    for (let i = 1; i <= x; i++) 
    {
        for (let j = 1; j <= y; j++) 
        {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", rainbowEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", eraserEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", hoverEffect);
        }   
    }
}


//Permite borrar todo el grid mediante un inner loop a todos los cuadrillos
const clearEffect = () => 
{    
    for (let i = 1; i <= x; i++) 
    {
        for (let j = 1; j <= y; j++) 
        {
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        }
    }
}




//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const rainbowEffect = (event) => 
{
    const area = event.target; 
    area.style.backgroundColor = getRandomColor(); 
}

const rainbowButton = () => 
{
    
    for (let i = 1; i <= x; i++) 
    {
        for (let j = 1; j <= y; j++) 
        {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", hoverEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", eraserEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter",  rainbowEffect);
        }
        
    }
}

const eraserEffect = (event) => 
{
    const area = event.target; 
    area.style.backgroundColor = "white";
}

const eraserButton = () => 
{
    for (let i = 1; i <= x; i++) 
    {
        for (let j = 1; j <= y; j++) 
        {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", rainbowEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", hoverEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter",  eraserEffect);

        }   
    }
}

const main = () => 
{
    createGrid(); 
    document.getElementById("but-clear").addEventListener("click", clearEffect);
    document.getElementById("color-input").addEventListener("input", updateFirst, false); 
    document.getElementById("but-rainbowMode").addEventListener("click", rainbowButton);
    document.getElementById("but-colorMode").addEventListener("click", colorButton);
    document.getElementById("but-eraser").addEventListener("click", eraserButton); 
    //A cada cuadrito se le otorga el evento hover 
    for (let i = 1; i <= x; i++) 
    {
        for (let j = 1; j <= y; j++) 
        {
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", hoverEffect);
        }
        
    }

   
    
}

window.onload = main; 