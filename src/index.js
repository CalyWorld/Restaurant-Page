import HomePage from "./Pages/HomePage.js";
import ContactPage from "./Pages/ContactPage.js";
import OrderPage from "./Pages/OrderPage.js";

const eventListener = () => {
  const btn = document.querySelectorAll("button");
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.id === "homebtn") {
        HomePage();
      } else if (e.target.id === "contactbtn") {
        ContactPage();
      } else if (e.target.id === "orderbtn") {
        OrderPage();
      }
    });
  });
};

HomePage();

eventListener();
