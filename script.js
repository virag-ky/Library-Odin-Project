import Book from "./book.js";

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

  const bookList = document.getElementById("book-list");
  const form = document.getElementById("add-book");
  const contact = document.getElementById("contact");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const addBtn = document.getElementById("add");
  const navItems = document.querySelectorAll("li");

  navItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      navigate(e);
    })
  );

  const navigate = (e) => {
    switch (e.target.parentElement.id) {
      case "item-1":
        bookList.style.display = "block";
        form.style.display = "none";
        contact.style.display = "none";
        break;
      case "item-2":
        form.style.display = "block";
        contact.style.display = "none";
        bookList.style.display = "none";
        break;
      case "item-3":
        contact.style.display = "block";
        form.style.display = "none";
        bookList.style.display = "none";
        break;
    }
  };

  class Library {
    constructor() {
      this.library = JSON.parse(localStorage.getItem("list")) || [];
    }

    addBook(title, author) {
      const selectedBook = new Book(title.value, author.value);
      this.library.push(selectedBook);
      this.createBook();
    }

    createBook() {
      bookList.innerHTML = "";

      for (let i = 0; i < this.library.length; i += 1) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book");
        bookContainer.innerHTML = `<img src="" alt="book" />
        <h2>${this.library[i].title}</h2>
        <h3>${this.library[i].author}</h3>
        <div class="read">
          <input type="checkbox" />
          <h4>Read</h4>
        </div>
        <button data-button="${i}">Delete</button>`;
        bookList.appendChild(bookContainer);
      }
      this.deleteBook();
    }

    deleteBook() {
      [...document.querySelectorAll("button")].forEach((button) => {
        const buttonIndex = parseInt(button.getAttribute("data"), 10);
        button.addEventListener("click", () => {
          this.library.splice(buttonIndex, 1);
          localStorage.setItem("list", JSON.stringify(this.library));
          this.createBook();
        });
      });
    }
  }

  const myLibrary = new Library();

  myLibrary.createBook();

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (title.value === "" || author.value === "") {
      return;
    }
    myLibrary.addBook(title, author);
    localStorage.setItem("list", JSON.stringify(myLibrary.library));
    title.value = "";
    author.value = "";
  });
});
