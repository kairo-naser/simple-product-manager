import createProducts from "../data/createProducts.js";
import deleteProducts from "../data/deleteProducts.js";
import getProducts from "../data/getProducts.js";
import updateProducts from "../data/updateProducts.js";


export async function getProductsController(req, res){
   try{
     const product = await getProducts()
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(product))
   }
   catch(error){
    console.log("Error Products are not found: " , error)
    res.writeHead(400, {'Content-Type':'application/json'})
    res.end(JSON.stringify({message:'Invalid the get request'}))
   }


}

export async function createProductsController(req, res){
    try{
      const body = []
      req.on('data', (chunck)=>{
        body.push(chunck)
      })
      req.on('end', async()=>{
        try{
          const products = JSON.parse(Buffer.concat(body).toString())
          const data = await createProducts(products)
          res.writeHead(201, {'Content-Type':'application/json'})
          res.end(JSON.stringify(data))
        }
        catch(error){
         console.log("Can not create products: " , error)
         res.writeHead(400, {'Content-Type':'application/json'})
         res.end(JSON.stringify({message:'Invalid creating prodcuts'}))
        }
      })

      
    }
    catch(error){
    console.log("Error Products are not created: " , error)
    res.writeHead(400, {'Content-Type':'application/json'})
    res.end(JSON.stringify({message:'Invalid the get request'}))
    }
}


export async function updateProductsController(req, res){
    const id = req.url.split('/')[2]
    const body = []
    req.on('data', (ch)=>{
        body.push(ch)
    })
    req.on('end', async()=>{
        try{
         const products = JSON.parse(Buffer.concat(body).toString())
         const data = await  updateProducts(id, products)
         res.writeHead(200, {'Content-Type':'application/JSON'})
         res.end(JSON.stringify(data))
        }
        catch(error){
         console.log("Error updating products : ", error)
        res.writeHead(400, {'Content-Type':'application/JSON'})
        res.end(JSON.stringify({message: 'Error updating products'}))
        }
    })


}

export async function deleteProductsController(req, res){
    const id = req.url.split('/')[2]
    const deleted = await deleteProducts(id)
    if(deleted){
      console.log("Deleted task: ", deleted)
      res.writeHead(200, {'Content-Type':'application/json'})
      res.end(JSON.stringify(deleted))
    } else {
      console.log(`Product with id ${id} not found for deletion`)
      res.writeHead(404, {'Content-Type':'application/json'})
      res.end(JSON.stringify({message: `Product with id ${id} not found`}))
    }
}