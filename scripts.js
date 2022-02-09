var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

//Variable globals para seleccionar el tamaño del grid
let x = 10;
let y = 10;

// Update the current slider value (each time you drag the slider handle)
slider.onchange = function () {
    slider.value = this.value;
    x = slider.value;
    y = slider.value;
    document.getElementById("grid").remove();

    const container = document.createElement("div");
    container.setAttribute("class", "container mt-5 mb-5 p-0");
    container.setAttribute("id", "grid");

    const botones = document.getElementById("botones")
    document.getElementById("body").insertBefore(container, botones);
    createGrid();
    colorButton();
}

slider.oninput = function () {
    slider.value = this.value;
    document.getElementById("numero").innerText = `${slider.value}x${slider.value}`;;
}


//El color de pincel toma por defecto el valor inicial por defecto puesto (o sea rojo)
let colorPincel = document.getElementById("color-input").value;

//Cada vez que se realice el evento de input, la variable global se actualizara con el valor actual ingresado
const updateFirst = (event) => {
    colorPincel = document.getElementById("color-input").value;
}

const createGrid = () => {
    const contenedor = document.getElementById("grid");
    const ancho = contenedor.offsetWidth;
    const largo = contenedor.offsetHeight; 
    let metricaX = ancho/x; 
    let metricaY = largo/y;
    for (let i = 1; i <= x; i++) {
        let fila = document.createElement("div");
        fila.setAttribute("id", "fila");
        fila.style.height = `${metricaY}px`;

        for (let j = 1; j <= y; j++) {
            let cuadrado = document.createElement("div");
            cuadrado.innerText = " ";
            cuadrado.setAttribute("class", "columna");
            cuadrado.setAttribute("id", `${i},${j}`)
            cuadrado.style.width = `${metricaX}px`;
            fila.appendChild(cuadrado)
        }
        contenedor.appendChild(fila)
    }
}

//Cada vez que se entra al div, el backgroundcolor varía
const hoverEffect = (event) => {
    const area = event.target;
    area.style.backgroundColor = colorPincel;
}

const colorButton = () => {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", rainbowEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", eraserEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", hoverEffect);
        }
    }
}


//Permite borrar todo el grid mediante un inner loop a todos los cuadrillos
const clearEffect = () => {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
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

const rainbowEffect = (event) => {
    const area = event.target;
    area.style.backgroundColor = getRandomColor();
}

const rainbowButton = () => {

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", hoverEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", eraserEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", rainbowEffect);
        }

    }
}


const eraserEffect = (event) => {
    const area = event.target;
    area.style.backgroundColor = "white";
}

const eraserButton = () => {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", rainbowEffect);
            document.getElementById(`${i},${j}`).removeEventListener("mouseenter", hoverEffect);
            document.getElementById(`${i},${j}`).addEventListener("mouseenter", eraserEffect);
        }
    }
}

const main = () => {
    //Inicialmente se crea el grid y por defecto el mouse utiliza el color rojo
    createGrid(); 
    colorButton();
    
    //Eventos por boton
    document.getElementById("but-clear").addEventListener("click", clearEffect);
    document.getElementById("color-input").addEventListener("input", updateFirst, false);
    document.getElementById("but-rainbowMode").addEventListener("click", rainbowButton);
    document.getElementById("but-colorMode").addEventListener("click", colorButton);
    document.getElementById("but-eraser").addEventListener("click", eraserButton);
}

window.onload = main; 