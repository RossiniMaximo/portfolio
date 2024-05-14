function servicesPage() {
  const welcomeSectionEl = document.querySelector(".services_welcome");
  const headerContEl = document.querySelector(".services_header_container");
  const servicesContEl = document.querySelector(".services_container");
  const footerContainerEl = document.querySelector(".footer_container");
  welcomeComp(
    {
      title: "Mis",
      subtitle: "Servicios",
      src: "../images/rocket.png",
    },
    welcomeSectionEl
  );
  headerComp(headerContEl);
  getData(servicesContEl);
  footerComponent(footerContainerEl);
}
servicesPage();
