const display = document.querySelector('.display');
const modalContainer = document.querySelector('#modal-container');
const form = document.querySelector('#form');
const addBook = document.querySelector('#add-book');
const submit = document.querySelector('#submit');

let myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

Book.prototype.readStatus = function(isRead){
    let status;

    if (this.isRead == true){
       status =  'Read';
    }
    else if(this.isRead == false){
        status = 'Not Read';
    };

    return status;
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
    let formReadStatus = form.status.checked;

    bookNew = new Book(formTitle, formAuthor, formPages, formReadStatus);
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
    const bookReadStatus = document.createElement('button');

    card.classList.add('card');
    bookTitle.classList.add('title');
    bookAuthor.classList.add('author');
    bookPages.classList.add('pages');
    bookReadStatus.classList.add('readStatus');
    if(bookNew.isRead===true){
        bookReadStatus.classList.add('read');
    }else{
        bookReadStatus.classList.add('notRead');
    };

    bookTitle.append(myLibrary[i].title);
    bookAuthor.append(myLibrary[i].author);
    bookPages.append(myLibrary[i].pages);
    bookReadStatus.append(myLibrary[i].readStatus());

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadStatus);

    display.appendChild(card);
};

addBook.addEventListener('click', ()=>{
    modalContainer.classList.add('show');
});

submit.addEventListener('click', ()=>{
    myFunction();
    modalContainer.classList.remove('show');
    const statusbtn = document.querySelector('.readStatus');
    status_change(statusbtn);
    console.log(statusbtn);
});


function status_change(statusbtn){
    statusbtn.addEventListener('click', ()=>{

        if(statusbtn.className == 'readStatus read'){
            statusbtn.innerHTML = 'Not Read';
        }else if(statusbtn.className == 'readStatus notRead'){
            statusbtn.innerHTML = 'Read';
        };

        statusbtn.classList.toggle('read');
        statusbtn.classList.toggle('notRead');
        
    });
};