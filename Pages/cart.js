import {navbar} from "../component/navbar.js "
import {footer} from "../component/footer.js"

let navMain=document.getElementById("navMain")
navMain.innerHTML=navbar()

let footerMain=document.getElementById("footerMain")
footerMain.innerHTML=footer()