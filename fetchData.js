import productos from './productos.json'

export default function fetchData() {
    return new Promise(resolve => {
        console.log('Se esta resolviendo')
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}


