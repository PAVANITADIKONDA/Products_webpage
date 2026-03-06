document.addEventListener("DOMContentLoaded", () => {

    let productDetails = document.getElementById("productDetails");
    let allproducts = JSON.parse(localStorage.getItem("allproducts"));
    let productId = localStorage.getItem("productId");

    if (allproducts && productId) {
        let selectedProduct = allproducts.find(v => v.id == productId);

        if (selectedProduct) {

            productDetails.innerHTML = `
            <main>
                <div class="image-section">
                    <img src="${selectedProduct.thumbnail}">
                </div>

                <div class="details-section">
                    <h1>${selectedProduct.title}</h1>
                    <p><b>Brand:</b> ${selectedProduct.brand}</p>
                    <p><b>Category:</b> ${selectedProduct.category}</p>
                    <p>${selectedProduct.description}</p>
                    <p>Price: ₹ ${Math.round(selectedProduct.price * 90)}</p>

                    <button id="addToCard">Add to Cart</button>
                    <button id="backtohome" onclick="goHome()">Back To Home</button>
                </div>
            </main>
            `;

            document.getElementById("addToCard").addEventListener("click", () => {
                addToCard(selectedProduct);
            });

        }
        else{
            productDetails.innerHTML=`<p>product not found.................</p>`
        }
    }
});


function addToCard(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added successfully");
    // window.location.href="../card/card.html";
}

function goHome() {
    window.location.href = "../mainproject/Home.html";
}
