function getPortfolioData(servicesContEl) {
  const res = fetch(
    "https://cdn.contentful.com/spaces/v0f7iosuzuih/environments/master/entries?access_token=vzoHwFgBKwy1C-ZQ960lkkk42_tfFNbG3QAighG92G8"
  );
  const data = res
    .then((res) => res.json())
    .then((data) => {
      getProyectsFromData(servicesContEl, data);
    });
}

function getProyectsFromData(servicesContEl, data) {
  let arr = [];
  arr.push(data);
  let proyects = [];
  const getProyects = arr.map((data) => {
    return data.items.filter((i, index) => {
      if (i.sys.contentType.sys.id === "proyects") {
        return data.includes.Asset.find((d) => {
          if (i.fields.title === d.fields.title) {
            proyects.push({
              title: i.fields.title,
              description: i.fields.description,
              img: d.fields.file.url,
            });
          }
        });
      }
    });
  });
  renderProyects(proyects, servicesContEl);
}

function renderProyects(proyects, containerEl) {
  const templateEl = document.querySelector("#proyects_template");
  const imgEl = templateEl.content.querySelector(".card_img");
  const titleEl = templateEl.content.querySelector(".card_title");
  const descriptionEl = templateEl.content.querySelector(".card_description");
  for (let p of proyects) {
    titleEl.textContent = p.title;
    descriptionEl.textContent = p.description;
    imgEl.src = p.img;
    const clone = document.importNode(templateEl.content, true);
    containerEl.appendChild(clone);
  }
}
