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
console.log(book1.info());


function addBookToLibrary(){
    // Function
}