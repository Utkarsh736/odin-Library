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


function myFunction() {
    let formTitle = form.title.value;
    let formAuthor = form.author.value;
    let formPages = form.pages.value;
    let formReadStatus = form.status.checked;

    bookNew = new Book(formTitle, formAuthor, formPages, formReadStatus);
    addBookToLibrary(bookNew);

    form.reset() 
};



function addBookToLibrary(entry){
    myLibrary.push(entry);
    main(entry);
}

function main(addBook){

    const card = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookReadStatus = document.createElement('button');
    const removebtn = document.createElement('button');

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
    removebtn.classList.add('remove');

    removebtn.addEventListener('click', remove);
    bookReadStatus.addEventListener('click', status_change);
 

    bookTitle.append(addBook.title);
    bookAuthor.append(addBook.author);
    bookPages.append(addBook.pages);
    bookReadStatus.append(addBook.readStatus());
    removebtn.textContent = 'Remove';

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadStatus);
    card.appendChild(removebtn);

    display.appendChild(card);
};

addBook.addEventListener('click', ()=>{
    modalContainer.classList.add('show');
});

submit.addEventListener('click', ()=>{
    myFunction();
    modalContainer.classList.remove('show');
    // statusbtn.addEventListener('click', status_change);
    console.log(myLibrary);
});


function resetDisplay(){
    display.innerHTML='';
};


function updateDisplay(){
    resetDisplay();
    for(let element of myLibrary){
        main(element);
    };
};


function status_change(e){

    let statusbtn = document.querySelector('.readStatus');
    let curr_status = e.target.textContent;

    if(curr_status === 'Read'){
        statusbtn.innerHTML = 'Not Read';
        statusbtn.classList.remove('read');
        statusbtn.classList.add('notRead');
    }
    else{
        statusbtn.innerHTML = 'Read';
        statusbtn.classList.remove('notRead');
        statusbtn.classList.add('read');
    };

};


function remove(e){
    let toRemoveTitle = e.path[1].children[0].innerHTML;
    let toRemoveIndex = myLibrary.findIndex(i => i.title == toRemoveTitle);

    if(toRemoveIndex > -1){
        myLibrary.splice(toRemoveIndex, 1);
        updateDisplay();
    };
};