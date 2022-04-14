window.addEventListener("load", () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const addBtn = document.createElement("button");
  const form = document.createElement("form");
  const authorInput = document.createElement("input");
  const bookTitle = document.createElement("input");

  const title = document.createElement("h1");
  title.innerHTML = `<a href="#">My Programming Books</a>`;

  const listItems = ["Books", "Add Book", "Contact"];

  /* Create navbar list items */
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.setAttribute("id", `item-${i + 1}`);
    li.innerHTML = `<a href="#">${listItems[i]}</a>`;
    navList.appendChild(li);
  }
  nav.appendChild(navList);
  header.appendChild(title);
  header.appendChild(nav);
  form.appendChild(addBtn);
  form.appendChild(authorInput);
  form.appendChild(bookTitle);
  main.appendChild(form);
});
