function headerComp(el) {
  let isOpen = false;
  const container = document.createElement("div");
  container.innerHTML = `
        <header class="header">
            <div class="header_logo">
             <img src="../images/logo.png" alt="logo" class="logo" />
           </div>
         <div class="header_hmg_menu">
               <div class="hmb_slayer"></div>
               <div class="hmb_slayer"></div>
               <div class="hmb_slayer"></div>
         </div>
         <div class="header_high_res_menu">
               <a href="/portfolio.html" class="high_res_menu_options">Portfolio</a>
               <a href="/services.html" class="high_res_menu_options">Servicios</a>
               <a href="/contact.html" class="high_res_menu_options">Contacto</a>
         </div>
        </header>
  `;

  const hmgEl = container.querySelector(".header_hmg_menu");
  hmgEl.addEventListener("click", (e) => {
    menuComp(() => (isOpen = true), container);
  });

  el.appendChild(container);
}
