const axios = require ("axios")




// const getBooks = async () =>{
    
// const dataBooks = [];

// for (let i = 1; i < 9 ; i++) {
//     const dataPerPage = await axios.get(`https://api.itbook.store/1.0/search/mongo?page=${i}`)  
//     dataBooks.push(dataPerPage.data.books.map(book => book)) 
//     }

//     console.log(dataBooks) 

 

// }



const getBooks = async (nombre) =>{
    
    const dataBooks = [];
    const dataTotal = await axios.get(`https://api.itbook.store/1.0/search/${nombre}`).data
    const { total } = dataTotal
    if(total == 0) return false
    for (let i = 1; i < total/10 ; i++) {
        const dataPerPage = await axios.get(`https://api.itbook.store/1.0/search/${nombre}?page=${i}`)  
        dataBooks.push(dataPerPage.data.books.map(book => book)) 
        }
    
        console.log(dataBooks) 
    
     
    
    }

   // realDataBooks = []

    // dataBooks.map(ids =>  {
    //     for (let i = 0; i < ids.length; i++) {
    //         const data =  axios.get(`https://api.itbook.store/1.0/books/${ids[i]}`)
    //                            .then(res =>  {
    //                             console.log(ids) 
    //                             return realDataBooks.push(res.data) }) 
            
    //     }

    //     // console.log(realDataBooks)
    // })




getBooks('mongo');