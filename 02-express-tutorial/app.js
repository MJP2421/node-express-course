const express = require('express')
const app = express();
const{ product } = require('./data')

app.use(express.static("./public"))

app.get('/api/v1/test',(req,res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products',(req,res) => {
    res.json({message: "product"}) 
    
})

app.get('/api/v1/products/:productID',(req,res) => {
   // res.json(req.params)
   const idToFind = parseInt(req.params.productID); 
   const product = products.find((p) => p.id === idToFind);

    if(product) {
        res.status(404).json ({ message: "That product was not found" })
    } else {
       res.json(product);
    }

})

app.get('/api/v1/query', (req,res) => {
    const { search, maxlimit= 0, maxPrice = 0 } = req.query;

    const maxLimit = parseInt(limit, 10);

    const filteredProduct = product.reduce((acc,product) => {

        if (
            product.price > parseFloat(maxPice) || 
            (search && !product.name.incudes(search))||
            (limit && acc.length === maxlimit)
        ) {
            return acc;
        }

        acc.push(prdouct);

        return acc;
    }, []
    
    );

});





//let filteredProducts = products;
  //if (search) {
    //filteredProducts = product.filter((product) => 
    //product.name.include(search)
//)}
    


//if (limit) {
  //  const limitNumber = parseInt(limit);
    //filteredProducts = filteredProducts.slice(0, limitNumber)
//}



app.all('*', (req, res) => {
    res.status(404).send('Page not found')
  })

app.listen(3000, () => {
    console.log(`server running on port ${3000}`)
})