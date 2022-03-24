import HomePage from "./Pages/HomePage.js";
import ContactPage from "./Pages/ContactPage.js";
import OrderPage from "./Pages/OrderPage.js";
// import Images from "./images/";

const eventListener = () =>{
    const homebtn = document.getElementById(".homebtn");
    const orderbtn = document.getElementById(".orderbtbn");
    const contactbtn = document.getElementById(".contactbtn");
    homebtn.addEventListener("click", ()=>{
        HomePage();
    });
}

HomePage();

window.load = eventListener;


