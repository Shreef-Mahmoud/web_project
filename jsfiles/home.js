window.onload = function() {
    shopProduct();
};

function shopProduct() {
    var productsSection = document.getElementsByClassName("pro")[0];

        console.log(products)
    if (productsSection) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productImg = document.createElement("img");
            productImg.src = product.image;
            productImg.alt = product.name;
            productDiv.appendChild(productImg);

            const productName = document.createElement("h3");
            productName.textContent = product.name;
            productDiv.appendChild(productName);

            const productPrice = document.createElement("p");
            productPrice.textContent = product.price;
            productDiv.appendChild(productPrice);

            // Append the created productDiv to the products section
            productsSection.appendChild(productDiv);
        });
    } else {
        console.error("No element with the class 'pro' found.");
    }
}
