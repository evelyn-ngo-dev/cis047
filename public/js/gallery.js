const yearElement = document.querySelector('#current-year');
yearElement.textContent = new Date().getFullYear();

const filter = document.querySelector("#photo-filter");
const items = [...document.querySelectorAll(".gallery figure")];
const status = document.querySelector("#filter-status");

filter.addEventListener("input", () => {
    const query = filter.value.trim().toLowerCase();
    let visibleCount = 0;

    for (const item of items) {
        const img = item.querySelector("img");
        const caption = item.querySelector("figcaption");
        const searchableText = `
      ${img?.alt || ""} 
      ${caption?.textContent || ""} 
      ${item.dataset.keywords || ""} 
      `.toLowerCase();
        const matches = searchableText.includes(query);
        item.hidden = !matches;
        if (matches) visibleCount += 1;
    }

    status.textContent = `${visibleCount} photos found`;
});