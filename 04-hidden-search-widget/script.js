const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  // 如果 input.placeholder 是空的，就加上 "Search..."，否則就移除 "Search..."
  input.placeholder.length === 0 ? (input.placeholder = "Search...") : (input.placeholder = "");

  // 如果 search 是 active 的，就 focus，否則就 blur
  if (search.classList.contains("active")) {
    input.focus();
  } else {
    input.blur();
  }
});
