console.log("Library class implementation Exercise");

class Library {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedBooks = {};
    }


    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
    
        });
    }
    
    
    issueBook(bookname, user){
        if (this.issuedBooks[bookname]==undefined){
        this.issuedBooks[bookname] = user;
        }
        else{
            console.log("this book is already issued.....!");
        }
    
    
    
    
    }
    
    
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    
    }
}

