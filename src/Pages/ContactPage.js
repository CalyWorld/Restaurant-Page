const content = () => {
  const contentContainer = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "Make a Contact";
  title.setAttribute("id", "contact-title");
  contentContainer.append(title);
  return contentContainer;
};

const ContactPage = () => {
  content();
};

export default ContactPage;
