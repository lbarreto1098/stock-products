const inputName = document.querySelector('#productName')
const inputPrecio = document.querySelector('#productPrecio')
//console.log({inputName, inputPrecio})

const buttonCrear = document.querySelector('#buttonCrear')
//console.log({buttonCrear})

buttonCrear.addEventListener('click', (e) => {
    //console.log({ name: inputName.value, precio: inputPrecio.value })
    const name = inputName.value
    const precio = inputPrecio.value

    //fetch: librería del navegador para hacer peticiones 
    fetch('/api/v1/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            precio
        })
    })
})