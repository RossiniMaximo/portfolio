function formComponent(el) {
  const container = document.createElement("div");
  container.innerHTML = `
    <form class="contact_form">
    <div class="contact_form_title_container">
        <h2 class="contact_form_title">Escribime</h2>
    </div>
    <div class="contact_form_content_separator">
        <div class="contact_form_upper_fields">
            <label class="contact_form_label">
                <span>Nombre</span>
                <input type="text" placeholder="Tu nombre" name="name" class="contact_form_input" />
            </label>
            <label class="contact_form_label">
                <span>Email</span>
                <input placeholder="tu@mail.com" name="email" type="email" class="contact_form_input" />
            </label>
        </div>
        <div class="contact_form_lower_fields">
            <label class="contact_form_label">
                <span>Mensaje</span>
                <textarea name="msg" class="contact_form_textarea"></textarea>
            </label>
            <div class="form_btn_container">
                <button class="form_button">Enviar</button>
            </div>
        </div>
    </div>
  </form>
    `;
  const formEl = container.querySelector(".contact_form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const msg = target.msg.value;
    sendEmail({ email, msg });
  });
  el.appendChild(container);
}
function sendEmail(props) {
  const res = fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      to: "maximostudent@gmail.com",
      message: props.msg,
      from: props.email,
    }),
  });
  const data = res.then((data) => data);
  return data;
}
