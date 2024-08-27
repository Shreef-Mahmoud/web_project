window.onload = function() {
    shopProduct();
};

function shopProduct() {
    var productsSection = document.getElementsByClassName("scrollmenu")[0];

        console.log(products)
    if (productsSection) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productImg = document.createElement("img");
            productImg.src = "./images/products/pro.jpg";
            productImg.alt = product.name;
            productDiv.appendChild(productImg);

            const productName = document.createElement("h3");
            productName.textContent = product.name;
            productDiv.appendChild(productName);

            const productPrice = document.createElement("p");
            productPrice.textContent = product.price+"$";
            productDiv.appendChild(productPrice);

            productsSection.appendChild(productDiv);
        });
    } else {
        console.error("No element with the class 'pro' found.");
    }
}
