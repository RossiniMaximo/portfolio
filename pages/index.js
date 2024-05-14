function main() {
  const headerContainerEl = document.querySelector(".header_container");
  const welcomeSectionEl = document.querySelector(".welcome");
  const contactFormContEl = document.querySelector(".contact_container");
  const footerContEl = document.querySelector(".footer_container");
  const servicesContEl = document.querySelector(".services_cont");
  welcomeComp(
    { title: "Hola", subtitle: "Soy Maximo!", src: "../images/rocket.png" },
    welcomeSectionEl
  );
  headerComp(headerContainerEl);
  formComponent(contactFormContEl);
  footerComponent(footerContEl);
  getData(servicesContEl);
}
main();
