const getAphorism = (aphorisms) => {
  return aphorisms[Math.floor(Math.random() * aphorisms.length)];
}

const aphorism = document.querySelector(".aphorism_text");
const pager = document.querySelector("#pager");
const aphorisms = ["a", "i", "u", "e", "o"];

pager.addEventListener("click", () => {
  aphorism.innerHTML = getAphorism(aphorisms);
});

