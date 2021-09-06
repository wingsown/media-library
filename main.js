class Media {

    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
         let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);

         return ratingsSum / this.ratings.length;
    }

    addRating(inputValue) {
        this.ratings.push(inputValue);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const onePiece = new Book('Eiichiro Oda', 'One Piece', 100);
onePiece.toggleCheckOutStatus();
onePiece.addRating(5, 5, 3);


console.log(onePiece.isCheckedOut);
console.log(onePiece.author);
console.log(onePiece.getAverageRating());

const spaceJamTwo = new Movie('LeBron James', 'Space Jam 2', 120);
spaceJamTwo.toggleCheckOutStatus();
spaceJamTwo.addRating(3, 4, 3);

console.log(spaceJamTwo.isCheckedOut);
console.log(spaceJamTwo.title);
console.log(spaceJamTwo.getAverageRating());
