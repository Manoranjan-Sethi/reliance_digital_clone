import {navbar} from "../component/navbar.js "
import {footer} from "../component/footer.js"

let navMain=document.getElementById("navMain")
console.log(navbar)
navMain.innerHTML=navbar()
let footerMain=document.getElementById("footerMain")
console.log(footer)
footerMain.innerHTML=footer()
    
    