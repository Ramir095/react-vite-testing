export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    return {
        nombreClave: clave,
        nombre: nombre,
        anios: edad,
        rango: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

// const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

// console.log(nombreClave, anios);
// console.log( lat, lng );


