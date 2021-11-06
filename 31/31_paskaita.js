class Book {
    element;
    author;
    pages;
    title;
    price;

    static bookShelf = new Set();

    constructor(title, pages, price, color = 'no', ...author) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.price = price;
        this.color = color;
        this.createHtml();

        this.constructor.bookShelf.add(this);  //statinis kreipinys objektiniame kontekste
    }

    createHtml() {
        this.element = document.createElement('div');
        const html = `
        <h2>${this.title}</h2>

        

        <h4>${this.author}</h4>
        <span>${this.pages}</span>
        <br>
        <span>${this.price} EUR</span>
        `;
        this.element.innerHTML = html;
        document.querySelector('.book-container').appendChild(this.element);
        this.addCover();
    }

    addCover() {
        this.element.classList.add('no-cover');
    }
}


class PinkCover extends Book {
    addCover() {
        this.element.classList.add('pink-cover');
    }
}


class YellowCover extends Book {
    addCover() {
        this.element.classList.add('yellow-cover');
    }
}


const book1 = new PinkCover('Dievų miškas', 280, 'Balys Sruoga', 30.50);
const book2 = new YellowCover('Altorių šesėly', 400, 'Vincas Mykolaitis-Putinas', 25.80);
const book3 = new Book('Balta drobulė', 300, 'Antanas Škėma', 38.99);

console.log(book1, book2, book3);
console.log(Book.bookShelf);

// console.log(book3.author);  //atspausdiname trecios knygos autoriu