import FrontImage from "./images/front-page.jpg";
import Icon from "./images/food.png";
const createHeader = () => {
  const header = document.createElement("header");
  const iconDiv = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const homebtn = document.createElement("button");
  const orderbtn = document.createElement("button");
  const contactbtn = document.createElement("button");

  iconDiv.classList.add("icon");
  ul.classList.add("select");
  li.classList.add("list");
  homebtn.setAttribute("id", "homebtn");
  orderbtn.setAttribute("id", "orderbtn");
  contactbtn.setAttribute("id", "contactbtn");

  header.append(iconDiv);
  header.append(ul);

  li.append(homebtn);
  li.append(orderbtn);
  li.append(contactbtn);
  ul.append(li);

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.setAttribute("id", "icon");
  iconDiv.append(myIcon);

  homebtn.textContent = "Home";
  orderbtn.textContent = "Order";
  contactbtn.textContent = "Contact";

  return header;
};

const content = () => {
  const contentContainer = document.getElementById("content");
  const ContainerDiv = document.createElement("div");
  const titleName = document.createElement("h1");
  const imageDiv = document.createElement("div");
  const myImage = new Image();
  myImage.src = FrontImage;
  myImage.setAttribute("id", "front-pageImage");
  imageDiv.setAttribute("id", "image-container");
  titleName.textContent = "Welcome to MI CASA";
  ContainerDiv.setAttribute("id", "homecontainer");
  titleName.classList.add("hometitle");
  imageDiv.append(myImage);
  ContainerDiv.append(titleName);
  ContainerDiv.append(imageDiv);
  contentContainer.append(ContainerDiv);
  return contentContainer;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.textContent = "Made by Callistus Anizoba";
  return footer;
};

const HomePage = () => {
  document.body.append(createHeader());
  document.body.append(content());
  document.body.append(createFooter());
};

export default HomePage;
