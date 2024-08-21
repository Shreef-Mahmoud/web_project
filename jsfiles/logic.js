var products = [
    { name: "Team Jersey 2024", price: "$49.99", image: "images/product1.jpg" },
    { name: "Custom Football Tee", price: "$39.99", image: "images/product2.jpg" },
    { name: "Vintage Team Shirt", price: "$29.99", image: "images/product3.jpg" },
    { name: "Official Team Cap", price: "$19.99", image: "images/product4.jpg" },
    { name: "Retro Football Scarf", price: "$24.99", image: "images/product5.jpg" },
    { name: "Retro Football Scarf", price: "$24.99", image: "images/product5.jpg" },
];

function shopProducts() {
    var productShower = document.getElementsByClassName('product-grid')[0];

    products.forEach(product => {
        const productCard = document.createElement('div');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn" onclick = 'addToCart()'>Add to Cart</button>
        `;

        productShower.appendChild(productCard);
    });
}

function addToCart()
{
    confirm("Added to cart");
}