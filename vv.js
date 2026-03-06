document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"))
    let productId=localStorage.getItem("productId")

    // console.log("productId");

    if(allproducts && productId){
        let selectedProduct=allproducts.find((v)=>{
            return v.id==productId;
        });
if(selectedProduct){
    productDetails.innerHTML=`
    <main>
     <div class="image-section">
        <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}">
    </div>
    


    <div class="details-section">
        <h1>${selectedProduct.title}</h1>
        <p><b>Brand:</b> ${selectedProduct.brand}</p>
        <p><b>Category:</b> ${selectedProduct.category}</p>

        <p class="desc">
            ${selectedProduct.description}
        </p>
        <p class="price">Price: ₹ ${Math.round((selectedProduct.price)*90)}</p>

        <div class="btns">
            <button id="addToCard"  onclick="addToCard"  class="cart">Add to Cart</button>
            <button id="backToHome" class="home" onclick="goHome()">Back to Home</button>
        </div>
    </div>
 </main>
`;
document.getElementById("addToCart").addEventListener("click",()=>{
    addToCard(selectedProduct);
});
}else{
 productDetails.innerHTML=`<p>product not available......</p>`
    
}
   }   else{
        productDetails.innerHTML=`<p>product not found......</p>`
    }
       

 })
function tapOn(){
    window.location.href="../card/card.html";
}
function goHome() {
    window.location.href = "../mainproject/Home.html";
}

function addToCard(product){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
     cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added sucessfully!!!!!!!!!!!!!");
}