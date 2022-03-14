const display = document.querySelector('.display');
const modalContainer = document.querySelector('#modal-container');
const form = document.querySelector('#form');
const addBook = document.querySelector('#add-book');
const submit = document.querySelector('#submit');


let myLibrary = [];

function Book(title, author, pages, isRead=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
};

Book.prototype.info = function(isRead){
    if (this.isRead == true){
        return(`The ${this.title} by ${this.author}, ${this.pages} pages, already read.`);
    }
    else if(this.isRead == false){
        return(`The ${this.title} by ${this.author}, ${this.pages} pages, not read yet.`);
    };
}; 

let book1 = new Book('Harry Potter', 'J.K. Rowling', 295, true);
let book2 = new Book('Sherlock Holmes', 'Arthur Conan Doyle', 500);
let book3 = new Book('Game of Thrones', 'George RR Martin', 300, true);
let book4 = new Book('Shining', 'Stephen King', 400);
let book5 = new Book('Mrs. Flowers', 'Maya Angelou', 250, true);



function myFunction() {
    let formTitle = form.title.value;
    let formAuthor = form.author.value;
    let formPages = form.pages.value;

    bookNew = new Book(formTitle, formAuthor, formPages);
    addBookToLibrary(bookNew);
    console.log(bookNew);

    form.reset() 
};



function addBookToLibrary(entry){
    myLibrary.push(entry);
    main();
}

function main(){

    let i = myLibrary.length-1;
    const card = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');

    card.classList.add('card');
    bookTitle.classList.add('title');
    bookAuthor.classList.add('author');
    bookPages.classList.add('pages');

    bookTitle.append(myLibrary[i].title);
    bookAuthor.append(myLibrary[i].author);
    bookPages.append(myLibrary[i].pages);

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);

    display.appendChild(card);
};


addBook.addEventListener('click', ()=>{
    modalContainer.classList.add('show');
});

submit.addEventListener('click', ()=>{
    myFunction();
    modalContainer.classList.remove('show');
});

// addBookToLibrary();