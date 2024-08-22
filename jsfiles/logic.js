// Shop html Variables

var products = [
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
    { name: "Manchester City 2024", price: "$49.99", image: "./images/products/product1-Front.jpg" },
    { name: "Real Madrid 2024", price: "$39.99", image: "./images/products/product2-Front.jpg" },
    { name: "Barcelona 2024", price: "$29.99", image: "./images/products/product3-front.jpeg" },
]; // this is the array that contains products data

var searchedProducts = [].concat(products); //this array is the product data after being searched

var currentPage = 0; // this contains the page number minus one
var lastPage = Math.ceil(searchedProducts.length / 20); // this is the number of pages calc by the array size


window.onscroll = function () { checkScrollPosition() }; // runs the function when page is scrolled

function checkScrollPosition() {
    var header = document.getElementById("header"); // gets header data
    var stopSection = document.getElementById("productHeader"); // gets product Header data
    var stopSectionOffset = stopSection.offsetTop - header.offsetHeight; // tell how far down the product header is

    if (window.pageYOffset >= stopSectionOffset) {
        header.style.position = "absolute"; // makes the header don't move
        header.style.top = stopSectionOffset + "px"; // puts the header above product header
    } else {
        header.style.position = "fixed"; // make the header move
        header.style.top = "0"; // puts the header on the top of the website
    } //checks if the header passed the product header
}

function shopProducts() {
    var productShower = document.getElementsByClassName('products')[0]; //gets products data
    productShower.innerHTML = ""; //empties the html inside

    var pageStart = (currentPage + 1).toString(); // turns page number to string
    var textCon = pageStart + " / " + lastPage.toString(); // make page number counter

    document.getElementById("pageNumber").textContent = textCon; //adds it to the html

    if(searchedProducts.length == 0)
    {
        productShower.innerHTML += `
                <div class="product-grid">
                    <h1> There is no Products </h1>
                </div>
            `;
    }
    else
    {
    for (let i = 0; i < 20; i++) {
        var product = searchedProducts[i + (currentPage * 20)];
        productShower.innerHTML += `
                <div class="product-grid">
                <div class = "photo">
                <img src="${product.image}" alt="${product.name}">
                    <div class = "productText">
                        <h3 >${product.name}</h3>
                        <p >${product.price}</p>
                        <button class= "productText" onclick="addToCart(${i})" >Add to Cart</button>
                    </div>
                </div>
                </div>
            `;
    } // shows twenty products in grid and sends it to the html
    }
}

function addToCart(productIndex) {
    confirm(`"${searchedProducts[productIndex + (currentPage * 20)].name}" added to cart!`);
    //confirms the payment by saying the bought product
}

function pageChanger(buttonId) {
    if (document.getElementById(buttonId).value == "Next") {
        if (currentPage + 1 == lastPage) {
            alert("It's The Last Page");
        }
        else {
            currentPage++;
        } //checks if its the last page to send alert or add a page
    }
    else if (document.getElementById(buttonId).value == "Back") {
        if (currentPage == 0) {
            alert("It's The First Page");
        }
        else {
            currentPage--;
        } //checks if its the first page to send alert or remove a page
    }
    shopProducts(); //shows the new products to the user
}

function search(searchId)
{
    var searchText = document.getElementById(searchId); // gets the search bar
    searchedProducts = []; // empties the array
    if(searchText.value == "")
    {
        searchedProducts = [].concat(products);
        document.getElementById("serachlabel").innerHTML = "Search";// changes label text to Search
    }
    else
    {
        products.forEach(product => {
            if(product.name.toLowerCase().indexOf(searchText.value.toLowerCase()) != -1)
            {
                searchedProducts.push({name: product.name, price: product.price, image: product.image })
            }
        }); // runs on every element and checks if it contains search bar text and adds it to the other array
        document.getElementById("serachlabel").innerHTML = ""; // changes label text to empty
    } // checks if the searhc bar is empty

    currentPage = 0; // reset page coutner
    lastPage = Math.ceil(searchedProducts.length / 20); // calc number of pages

    shopProducts(); // shows it to the user
}

