function footerComponent(el) {
  const cont = document.createElement("div");
  cont.innerHTML = `
  <div class="footer_content">
    <div class="footer_logo_cont">
        <img src="./images/logo.png" alt="logo" class="footer_logo" />
    </div>
     <nav class="footer_page_links">
        <a href="/index.html" class="footer_link"> <img src="./images/casa.png" alt="linkedin" /> Home</a>
        <a href="/services.html" class="footer_link"> <img src="./images/contacto.png" alt="linkedin" />Servicios</a>
        <a href="/contact.html" class="footer_link"> <img src="./images/telefono.png" alt="linkedin" />Contacto</a>
     </nav>
     <nav class="footer_my_social_media">
        <a href="" class="footer_my_social_link">
            <img src="./images/linkedin.png" alt="linkedin" />LinkedIn</a>
        <a href="" class="footer_my_social_link"><img src="./images/github.png" alt="github"/>Github</a>
     </nav>
        <div class="footer_page_data">©2024 - maximostudent@gmail.com</div>
  </div>
    `;

  el.appendChild(cont);
}
