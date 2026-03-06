document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
});
function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    // console.log(cart);
    // console.log(cartContent);
    // console.log(totalPrice);
    cartContent.innerHTML="";
    let totalBill=0;
   if(cart.length===0){
    cartContent.innerHTML=`your cart is empty start shopping`;
    
}

cart.map((product,i)=>{
    totalBill+=Math.floor((product.price)*90)
    // console.log(product,i);
    let newProd=document.createElement("div")
    newProd.setAttribute("class","prod-info")
    newProd.innerHTML=`
    <img src="${product.thumbnail}">
   
    <div id="items">
      <h1>${product.title}</h1>
      <h3>Availabitity:${product.availabilityStatus}</h3>
      <h3>Category:${product.category}</h3>
      <h3>ShippingInformation:${product.shippingInformation}</h3>
      <h3>WarrantyInformation:${product.warrantyInformation}</h3>
      <h3>price:${(Math.floor(product.price*90))}</h3>
    </div>
    <button onclick="removefromcard(${i})">Remove</button>

    `
   cartContent.append(newProd)    
})
totalPrice.innerText=`Total:${totalBill}`;
}
function removefromcard(index){
// console.log(index);
let cart=JSON.parse(localStorage.getItem("cart"));
cart.splice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
displayCart();


}
