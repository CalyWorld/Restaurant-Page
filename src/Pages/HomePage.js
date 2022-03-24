
const createHome = () => {
  const header = document.createElement("header");
  const iconDiv = document.createElement("div");
  const selectDiv = document.createElement("div");
  const homebtn = document.createElement("button");
  const orderbtn = document.createElement("button");
  const contactbtn = document.createElement("button");

  iconDiv.classList.add("icon");
  selectDiv.classList.add("select");
  homebtn.classList.add("homebtn");
  orderbtn.classList.add("orderbtn");
  contactbtn.classList.add("contactbtn");

  header.append(iconDiv);
  header.append(selectDiv);

  selectDiv.append(homebtn);
  selectDiv.append(orderbtn);
  selectDiv.append(contactbtn);

  iconDiv.textContent = "icon";

  homebtn.textContent = "Home";
  orderbtn.textContent = "Order";
  contactbtn.textContent = "Contact";

  return header;
};

const content = () => {
  const contentContainer = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "Welcome to my Restaurant";
  contentContainer.append(title);
  return contentContainer;
};

const footer = () => {
  const footer = document.createElement("footer");
  footer.textContent = "Made by Callistus Anizoba";
  return footer;
};

const HomePage = () => {
  document.body.append(createHome());
  document.body.append(content());
  document.body.append(footer());
};

export default HomePage;
