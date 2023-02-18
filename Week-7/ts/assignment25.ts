type book  ={
    title: String,
    author: String,
    readingStatus: Boolean
}

let library : book[]= [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for(let book of library){
    if(book.readingStatus){
        console.log(`Already read "${book.title}" by ${book.author}`);
    }else{
        console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
}