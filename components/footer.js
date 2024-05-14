function footerComponent(el) {
  const cont = document.createElement("div");
  cont.innerHTML = `
  <div class="footer_content">
    <div class="footer_logo_cont">
        <img src="./images/logo.png" alt="logo" class="footer_logo" />
    </div>
     <nav class="footer_page_links">
        <a href="portfolio/index.html" class="footer_link"> <img src="./images/casa.png" alt="linkedin" /> Home</a>
        <a href="portfolio/services.html" class="footer_link"> <img src="./images/contacto.png" alt="linkedin" />Servicios</a>
        <a href="portfolio/contact.html" class="footer_link"> <img src="./images/telefono.png" alt="linkedin" />Contacto</a>
     </nav>
     <nav class="footer_my_social_media">
        <a href="https://www.linkedin.com/in/maximo-rossini-fullstack/" class="footer_my_social_link">
            <img src="./images/linkedin.png" alt="linkedin" />LinkedIn</a>
        <a href="https://github.com/RossiniMaximo" class="footer_my_social_link"><img src="./images/github.png" alt="github"/>Github</a>
     </nav>
        <div class="footer_page_data">©2024 - maximostudent@gmail.com</div>
  </div>
    `;

  el.appendChild(cont);
}
