function menuComp(cb, containerEl) {
  console.log("cb :", cb());
  const container = document.createElement("div");
  container.innerHTML = `
        <div class="menu_close_container">
            <div class="menu_close_menu">
                <img src="../images/cross.png" alt="" class="menu_close_img" />
            </div>
            <nav class="nav_menu_options">
                <a href="portfolio/portfolio.html" class="menu_options">Portfolio</a>
                <a href="portfolio/services.html" class="menu_options">Servicios</a>
                <a href="portfolio/contact.html" class="menu_options">Contacto</a>
            </nav>
            </div>`;

  const crossIconEl = container.querySelector(".menu_close_img");

  crossIconEl.addEventListener("click", (e) => {
    containerEl.removeChild(container);
  });
  if (cb() === true) {
    containerEl.appendChild(container);
  }
}
