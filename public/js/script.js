const yearElement = document.querySelector('#current-year');
yearElement.textContent = new Date().getFullYear();

const button = document.querySelector("#details-button");
const details = document.querySelector("#details");

button.addEventListener("click", () => {
    const willShow = details.hidden;
    details.hidden = !willShow;
    button.setAttribute("aria-expanded", String(willShow));
    button.textContent = willShow ? "Hide details" : "Show details";
});