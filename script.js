const books = [
    { 
        title: "React Billionaire", 
        pages: 250, 
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    { 
        title: "Advanced JS", 
        pages: 500, 
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    { 
        title: "CSS Secrets", 
        pages: 320, 
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    { 
        title: "HTML Mastery", 
        pages: 200, 
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
  ];

//   Snack 1 - Filtra e Modifica

// Crea una funzione che somma due numeri.

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// const longBooks = books.filter(b => b.pages > 300);
// console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// const longBooksTitles = books.filter(b => b.pages > 300).map(b => b.title);

// console.log(longBooksTitles);

// Stampa in console ogni titolo nella console.

// longBooksTitles.forEach(t => console.log(t));

//-----------------------------------------------------------------------------------------------------------------------------

// Snack 2 - Il primo libro scontato

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// const availableBooks = books.filter(b => b.available === true);
// console.log(availableBooks);

// // Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// const discountedBooks = availableBooks.map(book => {
//     const price = parseFloat(book.price.replace('€', '')); // parseFloat NUMERI CON LA VIRGOLA
//     const discountedPrice = (price * .8).toFixed(2); // toFixed TOGLIE I NUMERI DOPO LA VIRGOLA CHE NON SERVEONO
//     return {
//         ...book,
//         price: `${discountedPrice}€`
//     }
// })
// console.log(discountedBooks);


// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
// const fullPricedBook = discountedBooks.find(book => {
//     const price = parseFloat(book.price.replace('€', ''));
//     // return price % 1 === 0;
//     return Number.isInteger(price); // HA LA STESSA FUNZIONE CON LA RIGA 88....CI RITORNA UN BOOLEANO TRUE O FALSE SE IL NUMERO E' INTERO
// });
// console.log(fullPricedBook);

//-----------------------------------------------------------------------------------------------------------------------------

// // Snack 3 - Ordinare gli Autori

// // Creare un array (authors) che contiene gli autori dei libri.
// const authors = books.map(b => b.author);
// console.log(authors);

// // Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// const areAuthorsAdults = authors.every(a => a.age > 18);
// console.log(areAuthorsAdults);

// // (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
// if(areAuthorsAdults) {

//     authors.sort((a, b) => a.age - b.age );

// } else{

//     authors.sort((a, b) => b.age - a.age );
// }
// console.log(authors);

// // Ordina l’array authors in base all’età, senza creare un nuovo array.
// authors.sort((a, b) => a.age - b.age);
// console.log(authors);

//-----------------------------------------------------------------------------------------------------------------------------

// Snack 4 - Calcola l’età media

// Creare un array (ages) che contiene le età degli autori dei libri.
const ages = books.map(b => b.author.age);
console.log(ages);

// Calcola la somma delle età (agesSum) usando reduce.
const agesSum = ages.reduce((accumulator, ages) => {
    return accumulator + ages;
}, 0)
console.log(agesSum);

// Stampa in console l’età media degli autori dei libri.
const average = agesSum / ages.length;
console.log(average);
