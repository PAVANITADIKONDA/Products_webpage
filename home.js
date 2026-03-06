let product=[];
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product));
        displayProduct(product);
    })
}
function displayProduct(prod){
    let output="";
    prod.map((val)=>{
        // console.log(val);
     
        output+=`
<main>
<div id="bdh">

<div id="image">
<img src="${val.thumbnail}"/>
</div>

<h3>${val.title}</h3>

<div id="bd">
<div id="items">
<h5>rating:${val.rating}</h5>
<h5>&#8377;${Math.round((val.price)*90)}</h5>
</div>

<div id="itm">
<h5>stock:${val.stock}</h5>
<button onclick="details(${val.id})">details</button>
</div>

</div>

</div>
</main>
`
    })
    document.getElementById("productContainer").innerHTML=output;
}

fetchData();
document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm)||
            v.category.toLowerCase().includes(searchTerm)
        );
    });
    displayProduct(filteredProduct);

});
function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="../viewDetails/viewDetails.html";
    
}