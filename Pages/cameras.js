import {navbar} from "../component/navbar.js "
import {footer} from "../component/footer.js"

let navMain=document.getElementById("navMain")
navMain.innerHTML=navbar()

let footerMain=document.getElementById("footerMain")
footerMain.innerHTML=footer()

const getData=async(url)=>{
    try {
        const res=await fetch(url)
        const data=await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
let displayCameras=document.getElementById("displayCameras")

const displayData=(data,parentNode)=>{
    data.forEach((elem) => {
        let cameraBox=document.createElement("div")
        cameraBox.id="cameraBox"
        let imgNamePrizeBox=document.createElement("div")
        imgNamePrizeBox.id="imgNamePrizeBox"

        let cameraImg=document.createElement("img")
        cameraImg.src=elem.img_url

        let cameraName=document.createElement("div")
        cameraName.id="cameraName"
        cameraName.innerText=elem.productName

        let priceBox=document.createElement("div")
        priceBox.id="priceBox"

        let offerPrize=document.createElement("p")
        offerPrize.id="offerPrize"
        offerPrize.innerText=elem.offerPrize

        let mrp=document.createElement("p")
        mrp.id="mrp"
        mrp.innerText=elem.mrp
        mrp.style.textDecoration="line-through"
        
        let wishBox=document.createElement("div")
        wishBox.id="wishBox"

        let compare=document.createElement("div")
        compare.id="compare"
        compare.textContent="Compare"

        let wishlist=document.createElement("div")
        wishlist.id="wishlist"
        wishlist.textContent="Wishlist"
        
        imgNamePrizeBox.append(cameraImg,cameraName,priceBox)
        priceBox.append(offerPrize,mrp)
        wishBox.append(compare,wishlist)
        cameraBox.append(imgNamePrizeBox,wishBox)
        parentNode.append(cameraBox)

        imgNamePrizeBox.addEventListener("click",function(){
            viewProductDetail(elem.id)
        })

    });
    function viewProductDetail(id){
        let idData=JSON.parse(localStorage.getItem("idData"))||[]
        let product=data.filter((elem)=>{
            return elem.id==id
        })
        idData=product[0]
        console.log(idData)
        localStorage.setItem("idData",JSON.stringify(idData))
        window.open(location.href="cameraDetail.html","_blank")
    }
   
}
const fetchApi=async()=>{
    try {
        let data= await getData(`http://localhost:3000/cameras?_page=1&_limit=12`)
        console.log(data)
        displayData(data,displayCameras)
    } catch (error) {
        console.log(error)
    }
}
fetchApi()









