import Brooke from "./images/brooke-lark.jpg";
import Jay from "./images/jay-wennington-N.jpg";
import Lily from "./images/lily-banse.jpg";
import Olayinka from "./images/olayinka-babalola.jpg";

const content = () => {
  const contentContainer = document.getElementById("content");
  const ContainerDiv = document.createElement("div");
  ContainerDiv.setAttribute("id", "ordercontainer");
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "orderimage-container");
  const title = document.createElement("h1");
  title.setAttribute("id", "ordertitle");
  title.textContent = "What do you want to order?";

  const brookeImage = new Image();
  const jayImage = new Image();
  const lilyImage = new Image();
  const olayinkaImage = new Image();

  brookeImage.src = Brooke;
  brookeImage.setAttribute("id", "brookeImage");
  jayImage.src = Jay;
  jayImage.setAttribute("id", "jayImage");
  lilyImage.src = Lily;
  lilyImage.setAttribute("id", "lilyImage");
  olayinkaImage.src = Olayinka;
  olayinkaImage.setAttribute("id", "olayinkaImage");

  imageDiv.append(brookeImage);
  imageDiv.append(jayImage);
  imageDiv.append(lilyImage);
  imageDiv.append(olayinkaImage);

  ContainerDiv.append(title);
  ContainerDiv.append(imageDiv);
  contentContainer.append(ContainerDiv);

  return contentContainer;
};

const OrderPage = () => {
  content();
};

export default OrderPage;
