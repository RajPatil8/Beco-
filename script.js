function toggleMenu(){document.getElementById("navMenu").classList.toggle("active")}
let cart=[];
function addToCart(name,price){cart.push({name,price});updateCart();showNotification(name+" added to your bag!")}
function updateCart(){document.getElementById("cartCount").textContent=cart.length;const box=document.getElementById("cartItems"),totalEl=document.getElementById("cartTotal");if(!cart.length){box.innerHTML='<p class="empty-cart">Your bag is empty.</p>';totalEl.textContent="₹0";return}let total=0;box.innerHTML="";cart.forEach((item,i)=>{total+=item.price;box.innerHTML+=`<div class="cart-item"><div><strong>${item.name}</strong><br><small>₹${item.price.toLocaleString("en-IN")}</small></div><button onclick="removeFromCart(${i})" style="border:none;background:none;cursor:pointer;color:#f28a45">Remove</button></div>`});totalEl.textContent="₹"+total.toLocaleString("en-IN")}
function removeFromCart(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("cartModal").classList.add("show");updateCart()}
function closeCart(){document.getElementById("cartModal").classList.remove("show")}
function checkout(){if(!cart.length){showNotification("Your bag is empty.");return}showNotification("Checkout demo — connect your payment system here.")}
document.querySelectorAll(".filter").forEach(filter=>filter.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));filter.classList.add("active");const cat=filter.dataset.filter;document.querySelectorAll(".product-card").forEach(p=>p.style.display=cat==="all"||p.dataset.category===cat?"":"none")}));
function toggleHeart(btn){btn.classList.toggle("liked");btn.textContent=btn.classList.contains("liked")?"♥":"♡"}
function openTracker(){document.getElementById("trackerModal").classList.add("show")}
function closeTracker(){document.getElementById("trackerModal").classList.remove("show")}
function openExchange(){document.getElementById("exchangeModal").classList.add("show")}
function closeExchange(){document.getElementById("exchangeModal").classList.remove("show")}
function submitExchange(e){e.preventDefault();closeExchange();showNotification("Thank you! Your exchange request has been received.")}
function showNotification(message){const n=document.createElement("div");n.textContent=message;Object.assign(n.style,{position:"fixed",bottom:"25px",right:"25px",zIndex:"5000",background:"#174d38",color:"white",padding:"15px 22px",borderRadius:"50px",fontSize:"14px",fontWeight:"600",boxShadow:"0 10px 30px rgba(0,0,0,.2)",transition:".3s"});document.body.appendChild(n);setTimeout(()=>{n.style.opacity="0";n.style.transform="translateY(10px)";setTimeout(()=>n.remove(),300)},2500)}
window.addEventListener("click",e=>{if(e.target===document.getElementById("cartModal"))closeCart();if(e.target===document.getElementById("trackerModal"))closeTracker();if(e.target===document.getElementById("exchangeModal"))closeExchange()});
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navMenu").classList.remove("active")));
