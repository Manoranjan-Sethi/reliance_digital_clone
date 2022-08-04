import {navbar} from "../component/navbar.js "
import {footer} from "../component/footer.js"

let navMain=document.getElementById("navMain")
navMain.innerHTML=navbar()

let footerMain=document.getElementById("footerMain")
footerMain.innerHTML=footer()


let product=JSON.parse(localStorage.getItem("idData"))||[]

const displayProduct=(product)=>{
   let imgDiv=document.getElementById("displayImg")
   let imgTag=document.createElement("img")
   imgTag.src=product.img_url
   imgDiv.append(imgTag)

   let nameDiv=document.getElementById("displayName")
   let idTag=document.createElement("p")
   idTag.id="idTag"
   idTag.textContent=`Article ID: ${product.id}`
   let nameTag=document.createElement("p")
   nameTag.id="nameTag"
   nameTag.textContent=product.productName
   nameDiv.append(idTag,nameTag)

   let offerPrice=document.getElementById("offerPriceCamDetail")
   offerPrice.textContent=product.offerPrize
   offerPrice.style.fontSize="25px"
   offerPrice.style.color="#003380"
   let mrp=document.getElementById("mrpCamDetail")
   let span=document.createElement("span")
   span.textContent=product.mrp
   mrp.textContent=`MRP: ${span.innerText} (inclusive of all taxes.)` 
  
}
displayProduct(product)

let cartBtn=document.getElementById("addToCartCamDetail")
cartBtn.addEventListener("click",addToCart)

function addToCart(){

     let cartProductArr=JSON.parse(localStorage.getItem("Cart"))||[]
     cartProductArr.push(product)
     console.log(cartProductArr)
     localStorage.setItem("Cart",JSON.stringify(cartProductArr))
     window.onload(location.href="cart.html") 
}