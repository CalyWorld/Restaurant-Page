const content = () => {
    const contentContainer = document.getElementById("content");
    const title = document.createElement("h1");
    title.setAttribute("id", "ordertitle");
    title.textContent = "What do you want to order";
    contentContainer.append(title);
    return contentContainer;
  };
  
  const OrderPage = () => {
   content();
  };
  
  export default OrderPage;