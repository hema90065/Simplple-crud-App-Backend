const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server.")
});


// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });


// app.get('/api/product/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// Update product
// app.put('/api/product/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
        
//         if(!product){
//             res.status(404).json(message,"Product not found" );
//         }

//         const udatedProduct = await Product.findById(id);

//         res.status(200).json(udatedProduct);

//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// Delete a nProduct
// app.delete('/api/product/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json(message,"Product not found" );
//         }

//         res.status(200).json({message: "Product deleted successfully"})
        
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });



// app.post('/api/products', async (req, res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

mongoose.connect("mongodb+srv://hemakumari90065:JIHoz8xIfHwIapq7@backenddb.wqwihxk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Database!");
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });

})
.catch(() => {
    console.log("Not Connected to Database!")
});