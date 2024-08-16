import data from '../data/data.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data.length > 0){
                resolve(data);
            } else {
                reject("No hay datos disponibles");
            }
        }, 100);
    });
}

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        const parsedId = parseInt(id); // Convertir id a número

        const item = data.find((el) => el.id === parsedId);

        if(item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            });
        }
    });
}
