const content = () => {
  const contentContainer = document.getElementById("content");
  const ContainerDiv = document.createElement("div");
  ContainerDiv.setAttribute("id", "contactcontainer");
  const title = document.createElement("h1");

  title.textContent = "Make a Contact";
  title.setAttribute("id", "contact-title");

  ContainerDiv.append(title);
  contentContainer.append(ContainerDiv);
  return contentContainer;
};

const ContactPage = () => {
  content();
};

export default ContactPage;
