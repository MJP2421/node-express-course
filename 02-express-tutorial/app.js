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

const lgger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date(). getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req,res) => {
    res.send( 'Home Page')
})

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use("/api/v1/people", peopleRouter);


//This is get for /api/v1/people
//app.get('/api/v1/people', (req,res) => {
  //  res.status(200).json({success: true, data: people });
//})

//app.post('/api/v1/people', (req, res) => {
  //  const {name} = req.body
    //if (!name) {
      //  return res 
        //.status(400).json({ success: false, message: "Please provide a name" });
    //} 
      // people.push({ id: people.length + 1, name: req.body.name });    
       //res.status(201).json({ success: true, name: req.body.name });
    
//})




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