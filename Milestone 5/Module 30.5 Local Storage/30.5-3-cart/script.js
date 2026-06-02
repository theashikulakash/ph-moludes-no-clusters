

const handleAddProducts = () => {
    const productEl = document.getElementById('pro')
    const quantityEl = document.getElementById('qty')
    const product = productEl.value 
    const quantity = parseInt(quantityEl.value)
    console.log(product, quantity)

    displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEl.value = ''
    quantityEl.value = ''
}

const getCart = () => {
    let cart = {}

    const cartJSON = localStorage.getItem('cart')
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }

    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart()

    if(cart[product]) {
        cart[product] = cart[product] + quantity
    } else {
        cart[product] = quantity
    }
    

    const cartJSON = JSON.stringify(cart)
    localStorage.setItem('cart', cartJSON)
}


const displayProduct = (product, quantity) => {
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`

    // get the ul 
    const ul = document.getElementById('pro-con')
    ul.appendChild(li)
}

// display products from stored local storage 
const displayStoredProducts = () => {
    const cart = getCart()
    for(const product in cart) {
        const quantity = cart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}


// to save Object or array in the localStorage 

// 1. convert the object to JSON string by using JSON stringify

// 2. localStorage.setItem() 



// to get object from the local stroage and it will be in JSON String, convert the JSON string to js object by using JSON.parse