console.log("this is project on building a college library website");


// constructor 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

// add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui");
    tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;

}

// implementing clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implementing validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }

    else {
        return true;
    }

}

// show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);

    // the '2000' is in milliseconds...!


}
// add submit eventlistener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

// note:----- form ka default behaviour hota h ki jb bhi submit kroge to page ko reload krwa deta h 
function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("you have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    // fiction, programming,cooking

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    display.validate(book);
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Success", " Your book has been successfully added.!");


    }
    else {
        // show error 
        display.show("Errors", " Sorry you cannot add this book..!");
    }



}

