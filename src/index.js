import HomePage from "./Pages/HomePage.js";
import ContactPage from "./Pages/ContactPage.js";
import OrderPage from "./Pages/OrderPage.js";

const addEventListener = () => {
  const btn = document.querySelectorAll("button");

  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.id === "homebtn") {
        document.getElementById("homecontainer").style.display = "block";
        document.getElementById("ordercontainer").style.display = "none";
        document.getElementById("contactcontainer").style.display = "none";
      } else if (e.target.id === "orderbtn") {
        document.getElementById("ordercontainer").style.display = "block";
        document.getElementById("homecontainer").style.display = "none";
        document.getElementById("contactcontainer").style.display = "none";
      } else if (e.target.id === "contactbtn") {
        document.getElementById("contactcontainer").style.display = "block";
        document.getElementById("homecontainer").style.display = "none";
        document.getElementById("ordercontainer").style.display = "none";
      }
    });
  });
};

const functionHolder = () => {
  HomePage();
  OrderPage();
  ContactPage();
  addEventListener();
};

functionHolder();
