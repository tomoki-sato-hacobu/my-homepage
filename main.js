
// 格言のリストを取得する
const fetchAphorisms = async () => {
  const res = await fetch("http://localhost:8080/aphorisms");
  const json = await res.json();
  return json;
}

const aphorism = document.querySelector(".aphorism_text");
const pager = document.querySelector("#pager");

pager.addEventListener("click", () => {
  const aphorisms = fetchAphorisms().then(aphorisms => {
    const pickedAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)]
    aphorism.innerHTML = pickedAphorism.aphorism;
  });
});


