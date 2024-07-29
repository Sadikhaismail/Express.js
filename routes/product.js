// const express = require('express')
// const router = express.Router()

// router.get('/products/',(req,res)=>{
//     res.json({product:"This is a product from"})
// })
// router.get('/products/:id',(req,res)=>{
//     console.log(req.params.productsId);
//     res.send("This is a product")
// })
// // router.post('/products',(req,res)=>{
// //     res.send('this is not a product')
// // })
// module.exports = router





const express = require ('express')
const router = express.Router()

const products=[
    {
      "productId": 1,
      "productName": "Smartphone X200",
      "productPrice": 699.99,
      "productDescription": "Latest smartphone with 6.7-inch display, 128GB storage, and 5G connectivity."
    },
    {
      "productId": 2,
      "productName": "4K Ultra HD TV",
      "productPrice": 1199.99,
      "productDescription": "55-inch 4K Ultra HD TV with smart features and Dolby Vision support."
    },
    {
      "productId": 3,
      "productName": "Bluetooth Headphones",
      "productPrice": 149.99,
      "productDescription": "Wireless over-ear headphones with noise-cancellation and 20-hour battery life."
    },
    {
      "productId": 4,
      "productName": "Laptop Pro 15",
      "productPrice": 1399.99,
      "productDescription": "15-inch laptop with Intel i7 processor, 16GB RAM, and 512GB SSD."
    },
    {
      "productId": 5,
      "productName": "Smartwatch Pro",
      "productPrice": 299.99,
      "productDescription": "Smartwatch with heart rate monitor, GPS, and customizable watch faces."
    },
    {
      "productId": 6,
      "productName": "Wireless Mouse",
      "productPrice": 39.99,
      "productDescription": "Ergonomic wireless mouse with adjustable DPI and long-lasting battery."
    },
    {
      "productId": 7,
      "productName": "Portable SSD 1TB",
      "productPrice": 199.99,
      "productDescription": "1TB portable solid-state drive with USB 3.1 connectivity and high-speed transfer rates."
    },
    {
      "productId": 8,
      "productName": "Gaming Keyboard",
      "productPrice": 89.99,
      "productDescription": "Mechanical gaming keyboard with customizable RGB backlighting and programmable keys."
    },
    {
      "productId": 9,
      "productName": "Digital Camera Z300",
      "productPrice": 499.99,
      "productDescription": "Digital camera with 20MP resolution, 3x optical zoom, and Wi-Fi connectivity."
    },
    {
      "productId": 10,
      "productName": "Electric Kettle",
      "productPrice": 34.99,
      "productDescription": "1.7-liter electric kettle with rapid boiling and automatic shut-off features."
    }
  ]

//   router.get('/productWithId/:productId',(req,res)=>{
//     const specifiedProduct = products.find((e)=>e.productId == req.params.productId)
//  console.log(specifiedProduct);
//  if (specifiedProduct){
//     res.status(200).json({products:specifiedProduct})
//  }
// })


// router.get('/allProduct',(req,res)=>{
//     res.status(200).json({allProduct:products})

// })








router.post ('/newProduct',(req,res)=>{
    products.push(req.body)
    res.status(200).json({newProduct:products, message:"New product added"})
})









router.put ('/updateProduct/:productId',(req,res)=>{
    const {productName,productPrice,productDescription} = req.body
    const id = req.params.productId;
    

const updateProduct = products.map((product)=>{
    if (product.productId == id){
        return {...product,productName:productName,productPrice:productPrice,productDescription:productDescription}

    }
        return product
    
    
})

    res.status(200).json({product:updateProduct,message:"product updated"})   
})


module.exports = router
  
