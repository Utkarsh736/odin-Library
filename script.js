let myLibrary = [];

function Book(title, author, pages, isRead=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        if (isRead == true){
            return(`The ${title} by ${author}, ${pages} pages, already read.`);
        }
        else if(isRead == false){
            return(`The ${title} by ${author}, ${pages} pages, not read yet.`);
        };
    };
};

let book1 = new Book('Harry Potter', 'J.K. Rowling', 295, true);
let book2 = new Book('Sherlock Holmes', 'Arthur Conan Doyle', 500);
let book3 = new Book('Game of Thrones', 'George RR Martin', 300, true);
let book4 = new Book('The Shining', 'Stephen King', 400);
let book5 = new Book('Mrs. Flowers', 'Maya Angelou', 250, true);


function addBookToLibrary(){
    // Function
}