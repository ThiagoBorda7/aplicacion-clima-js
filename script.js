let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = 'e5ae91e4755a6002d8cce95aba1932c9';
let kelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
    
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){

    const datosClima = document.getElementById('datosClima');

    datosClima.innerHTML = '';

    const ciudadNombre = response.name;
    const ciudadPais = response.sys.country;
    const temperatura = response.main.temp;
    const humedad = response.main.humidity;
    const descripcion = response.weather[0].description;
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${ciudadPais}`;

    const ciudadTemp = document.createElement('p');
    ciudadTemp.textContent = `La temperatura es: ${Math.floor(temperatura - kelvin)}°C`;

    const ciudadHumedad = document.createElement('p');
    ciudadHumedad.textContent = `La humedad es: ${humedad}%`;

    const ciudadIcono = document.createElement('img');
    ciudadIcono.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const ciudadDes = document.createElement('p');
    ciudadDes.textContent = `La descripción metereológica es: ${descripcion}`;

    datosClima.appendChild(ciudadTitulo);
    datosClima.appendChild(ciudadTemp);
    datosClima.appendChild(ciudadHumedad);
    datosClima.appendChild(ciudadIcono)
    datosClima.appendChild(ciudadDes);
}

