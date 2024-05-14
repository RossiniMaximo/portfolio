function portfolioPage() {
  const headerContEl = document.querySelector(".portfolio_header");
  const welcomeContEl = document.querySelector(".portfolio_welcome");
  const proyectsContEl = document.querySelector(".portfolio_proyects");
  const footerContEl = document.querySelector(".portfolio_footer");
  getPortfolioData(proyectsContEl);
  headerComp(headerContEl);
  welcomeComp(
    { title: "Mis", subtitle: "Proyectos", src: "../images/rocket.png" },
    welcomeContEl
  );
  footerComponent(footerContEl);
}

portfolioPage();
