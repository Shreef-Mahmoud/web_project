// Shop html Variables

let productindexs = []; // array for the indexes that is searched

let products;

let searchedProducts; //this array is the product data after being searched

let currentPage = 0; // this contains the page number minus one
let lastPage ; // this is the number of pages calc by the array size

let accName = "Shreef"; // saves account names

let login = false; // boolean to check of loged in or not
let admin = true; //boolean to check if admin or not

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
    var productShower = document.getElementsByClassName('products')[0];
    productShower.innerHTML = "";

    // Ensure products and searchedProducts are defined and are arrays
    if (!Array.isArray(searchedProducts)) {
        searchedProducts = [];
    }
    
    if (typeof lastPage === 'undefined' || lastPage === 0) {
        lastPage = 1; // Default to 1 if not set
    }

    var pageStart = (currentPage + 1).toString();
    var textCon = pageStart + " / " + lastPage.toString();

    document.getElementById("pageNumber").textContent = textCon;

    if (searchedProducts.length === 0) {
        productShower.innerHTML += `
            <div class="product-grid">
                <h1> There are no Products </h1>
            </div>
        `;
    } else {
        for (let i = 0; i < 20; i++) {
            var product = searchedProducts[i + (currentPage * 20)];
            if (product) {
                productShower.innerHTML += `
                    <div class="product-grid">
                        <div class="photo">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="productText">
                                <h3>${product.name}</h3>
                                <p>${product.price}</p>
                                <button class="productText" onclick="addToCart(${i})">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    }
}


function addToCart(productIndex) {
    var temp = confirm(`"${searchedProducts[productIndex + (currentPage * 20)].name}" added to cart!`);
    //confirms the payment

    if(temp)
    {
        if(productindexs.length > 0)
            {
                if ( (productIndex + (currentPage * 20)) >= 0 && (productIndex + (currentPage * 20)) < searchedProducts.length) {
                    products.splice(productindexs[(productIndex + (currentPage * 20))], 1);
                }
                productindexs = [];
            }
            else
            {
                if ( (productIndex + (currentPage * 20)) >= 0 && (productIndex + (currentPage * 20)) < searchedProducts.length) {
                    products.splice([(productIndex + (currentPage * 20))], 1);
                }
            }/* checks if you searched or didn't search 
                if yes gets the index from the product indexs array and remvoes it from product array
                if not get the index and removes it from product array*/
        
        
            searchedProducts = [].concat(products); // updates seached products array
            shopProducts(); //returns to the shop
    }
}

function pageChanger(buttonId) {
    if (document.getElementById(buttonId).value === "Next") {
        if (currentPage + 1 >= lastPage) {
            alert("It's The Last Page");
        } else {
            currentPage++;
        }
    } else if (document.getElementById(buttonId).value === "Back") {
        if (currentPage <= 0) {
            alert("It's The First Page");
        } else {
            currentPage--;
        }
    }
    shopProducts(); // Shows the new products to the user
}


function search(searchId) {
    var searchText = document.getElementById(searchId);
    
    // Ensure products and searchedProducts are defined and are arrays
    if (!Array.isArray(products)) {
        products = [];
    }
    
    searchedProducts = [];
    productindexs = [];

    if (searchText.value === "") {
        searchedProducts = [].concat(products);
        document.getElementById("serachlabel").innerHTML = "Search";
    } else {
        products.forEach(function (product, i) {
            if (product.name.toLowerCase().indexOf(searchText.value.toLowerCase()) !== -1) {
                searchedProducts.push({ name: product.name, price: product.price, image: product.image });
                productindexs.push(i);
            }
        });
        document.getElementById("serachlabel").innerHTML = "";
    }

    currentPage = 0;
    lastPage = Math.ceil(searchedProducts.length / 20);
    shopProducts();
}

function account() {
    var regElement = document.getElementById("reg"); // get the div in header
    var logOutElement = document.getElementById("logOut"); // fet the div in header

    if (!login) {
        regElement.innerHTML = `
            <div>
                <a class= "Register" id = "login1" onclick="log(this.id)" > Sign-Up </a>
                <a class= "Register" id = "signup1" onclick="log(this.id)" > Log-In </a>
            </div>
        `;

        logOutElement.innerHTML = "";
    }
    else {
        regElement.innerHTML = `
            <div id = "Reg">
                <h4> Welcome Back , </h4>
                <br>
                <h4>${accName}</h4>
            </div>
        `

        logOutElement.innerHTML = `
            <a class="Register" id = "log-out" onclick="log(this.id)"> Log-Out </a>
        `

        if (admin) {
            logOutElement.innerHTML += `
                <a href = "Addproduct.html" class="Register"> Add Product </a>
            `
        }// cheacks if he is an admin to add him add product button
    }
    /*checks if he is loged in or not
        if false shows two links , log-in and sign-up
        if else is show welcome back his name and a log-out link*/

}

function log(status) {
    if (status == "log-out") {
        login = false;
        admin = false;
    }
    else {
        login = true;
        admin = true;
    } /* checks on the id of the link that was clicked
        if it was log-out then it lagos out
        else logins in*/
    account(); //runs the function to show the new buttons
}

/*Admin code*/

function removeplaceholder(value){
    document.getElementById(value).placeholder='';
    // document.getElementById(value).placeholder='';
}

function submitproduct(){
    var temp=confirm("Are you sure that you need submit?");

    if(temp==true){
    var name=document.getElementById("name").value;
    var price=document.getElementById("price").value;
    var photo=document.getElementById("photo").image;
    console.log(photo);
    var newproduct = {name, price, image: photo};
    products.push(newproduct);}
    searchedProducts = [].concat(products);
}


function cancel(){
    var temp=confirm("Are you sure that you need cancel?");
    if(temp==true){
    document.getElementById("name").value=''
    document.getElementById("price").value=''
    document.getElementById("photo").value=''
    document.getElementById("desc").value=''
    document.getElementById("quality").value='High Copy'
    document.getElementById("options").value='S'
    document.getElementById("color").value='#000000'}
}

function displayproducts() {
    const dropdownContent = document.getElementById('dropdown-content');
    const selectedItemButton = document.getElementById('selected-item');
    const scrollContent = document.getElementById('scroll-content');

    // Clear the current content
    scrollContent.innerHTML = '';

    // Function to handle item selection
    function selectItem(name) {
        selectedItemButton.textContent = name;
        dropdownContent.style.display = 'none';  // Hide the dropdown content
    }

    // Function to delete an item
    function deleteItem(index) {
        var temp=confirm("Are you sure that you want delete "+products[index].name+"?");
        if(temp==true){
        products.splice(index, 1);  // Remove the item from the array
        displayproducts();
        }  // Refresh the displayed list
    }

    // Create and insert items into the scrollable content
    products.forEach((item, index) => {
        // Create a div for each item
        const div = document.createElement('div');
        div.className = 'item';

        // Create an img element
        const img = document.createElement('img');
        img.src = item.image;

        // Create a text node
        const text = document.createTextNode(item.name);

        // Append img and text to the div
        div.appendChild(img);
        div.appendChild(text);

        // Add click event to handle item selection
        div.addEventListener('click', () => selectItem(item.name));

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className="deletebutton"
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent triggering the selectItem when deleting
            deleteItem(index);
        });

        // Append the delete button to the div
        div.appendChild(deleteButton);

        // Append the div to the scroll content
        scrollContent.appendChild(div);
    });

}
/*end admin code*/

fetch("./jsfiles/products.json")
    .then(response => response.json())
    .then(data => { 
        products = data;
        searchedProducts = [].concat(products);
        lastPage = Math.ceil(searchedProducts.length / 20);
        currentPage = 0; // Reset current page when data is loaded
        shopProducts(); // Display products once data is loaded
})
    .catch(error => {
        console.log('Error fetching data:', error);
});