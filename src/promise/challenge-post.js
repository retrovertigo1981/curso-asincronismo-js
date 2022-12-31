import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi, options);
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": 'Xbox One red control',
    "price": 48,
    "description": 'Xbox Wireless Controller',
    "categoryId": 1,
    "images": ['https://www.pexels.com/es-es/foto/rojo-mano-xbox-mando-de-videojuegos-6794851']
}

const options = {
    method: 'POST', //tiene que ir en mayúscula
    mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
    credentials: 'same-origin', //es opcional
    headers:{
        'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
    body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
}


//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));