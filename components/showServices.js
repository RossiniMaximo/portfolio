function getData(servicesContEl) {
  const res = fetch(
    "https://cdn.contentful.com/spaces/v0f7iosuzuih/environments/master/entries?access_token=vzoHwFgBKwy1C-ZQ960lkkk42_tfFNbG3QAighG92G8"
  );
  const data = res
    .then((res) => res.json())
    .then((data) => getServicesFromData(servicesContEl, data));
}
function getServicesFromData(servicesContEl, data) {
  let arr = [];
  arr.push(data);
  let services = [];
  const getServices = arr.map((ser) => {
    return ser.items.filter((i, index) => {
      if (i.sys.contentType.sys.id === "services") {
        return ser.includes.Asset.find((d) => {
          if (i.fields.title === d.fields.title) {
            services.push({
              title: i.fields.title,
              description: i.fields.description,
              img: d.fields.file.url,
            });
          }
        });
      }
    });
  });
  renderServices(services, servicesContEl);
}

function renderServices(services, el) {
  const templateEl = document.querySelector("#services_template");
  const imgEl = templateEl.content.querySelector(".card_img");
  const titleEl = templateEl.content.querySelector(".card_title");
  const descriptionEl = templateEl.content.querySelector(".card_description");
  if (services) {
    for (let s of services) {
      imgEl.src = s.img;
      titleEl.textContent = s.title;
      descriptionEl.textContent = s.description;
      const clone = document.importNode(templateEl.content, true);
      el.appendChild(clone);
    }
  }
}
renderServices();
