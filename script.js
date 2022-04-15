window.addEventListener("load", () => {
  const listItems = ["Books", "Add Book", "Contact"];

  const header = document.querySelector("header");
  header.innerHTML = `<h1><a href="#">My Programming Books</a></h1><nav><ul></ul></nav>`;
  const navUl = document.querySelector("ul");

  /* Create navbar list items */
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.setAttribute("id", `item-${i + 1}`);
    li.innerHTML = `<a href="#">${listItems[i]}</a>`;
    navUl.appendChild(li);
  }

  const main = document.querySelector("main");
  main.innerHTML = `<section id="book-list">
  <div class="book">
    <img
      src="the-pragmatic-programmer.jpeg"
      alt="the pragmatic programmer book"
    />
    <h2>The Pragmatic Programmer</h2>
    <h3>By David Thomas & Andrew Hunt</h3>
    <div class="read">
      <input type="checkbox" />
      <h4>Read</h4>
    </div>
  </div>
  <div class="book">
    <img src="clean-code.jpeg" alt="clean code book" />
    <h2>Clean Code</h2>
    <h3>By Robert C. Martin</h3>
    <div class="read">
      <input type="checkbox" />
      <h4>Read</h4>
    </div>
  </div>
</section>
<section id="add-book">
  <form action="#">
    <input type="text" name="title" id="title" placeholder="Title" />
    <input type="text" name="author" id="author" placeholder="Author" />
    <input type="button" id="add" value="Add Book" />
  </form>
</section>
<section id="contact">
  <h3>
    Github:<a href="https://github.com/virag-ky" target="_blank"
      >@virag-ky</a
    >
  </h3>
  <h3>
    Twitter:<a href="https://twitter.com/Virag_Ky" target="_blank"
      >@Virag_Ky</a
    >
  </h3>
  <h3>
    LinkedIn:<a
      href="https://www.linkedin.com/in/virag-kormoczy/"
      target="_blank"
      >virag-kormoczy</a
    >
  </h3>
</section>`;

  const myLibrary = JSON.parse(localStorage.getItem("list")) || [];

  const bookList = document.getElementById("book-list");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const addBtn = document.getElementById("add");
  const regex = /^\s+$/;

  const createBook = (title, author) => {
    const object = {};
    object.title = title.value;
    object.author = author.value;

    myLibrary.push(object);
    console.log(myLibrary);

    title.value = "";
    author.value = "";
  };
  addBtn.addEventListener("click", () => {
    createBook(title, author);
  });
});
