const display = document.querySelector('.display');

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



function addBookToLibrary(){
    myLibrary.push(book1, book2, book3, book4, book5);
}

function main(){

    for(let i=0; i<myLibrary.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        card.append(myLibrary[i].title);
        card.append(myLibrary[i].author);
        card.append(myLibrary[i].pages);
        console.log(card);
        display.appendChild(card);
    };
};

addBookToLibrary();
main();