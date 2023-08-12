const findBooksByCategory = ((bookList, category) => {

    const filteredList = bookList.filter(element => element.categories.includes(category))

    return filteredList

})

const findBookById = ((bookList, bookId) => {

    if(bookId <= bookList.length){

        const filteredId = bookList.filter((element => element.id == bookId))

        return filteredId;
    }else {
        return undefined
    }  
})

const sellBook = ((bookList, bookId, userType = 'normal') => {

    const book = bookList.filter(book => book.id == bookId )
    if(!book || book[0].quantity === 0){
        return 'Livro indisponível para compra'
    }

    const discount = userTypeDiscount[userType];
    const totalPrice = book[0].price - (book[0].price * discount);

    book[0].quantity -= 1;

    return `Livro ${book[0].title} vendido com sucesso por R$${totalPrice.toFixed(2)} (${discount*100}% de desconto).`
})

const calculateAverageRating = ((bookList, bookId) => {
    
    const book = bookList.filter(book => book.id == bookId)
    
    if(book === null || book === undefined || book === 0){
        return 'Livro não encontrado'
    }

    if(book[0].ratings == 0){
        return `O livro ${book[0].title} não possui nenhuma avaliação.`
    }
    
    const ratings = book[0].ratings;

    const totalSum = ratings.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
  
    const averageRating = (totalSum / ratings.length).toFixed(2);

    return `O livro ${book[0].title} possui uma média de avaliação igual a ${averageRating}`;
})
