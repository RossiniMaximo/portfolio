function welcomeComp(props, el) {
  const container = document.createElement("div");
  container.innerHTML = `
        <div class="welcome_cont">
         <div class="welcome_main_text_container">
            <h1  class="welcome_title">${props.title}</h 1>
            <span class="welcome_subtitle">${props.subtitle}</span>
         </div>
         <div class="welcome_img_container">
          <img src="${props.src || "../logo.png"}" alt="" class="welcome_img" />
         </div>
        </div>
    `;

  el.appendChild(container);
}
