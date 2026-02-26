import http from 'http';
import decrypt  from 'dotenv';
decrypt.config();
import { getProductsController, createProductsController, updateProductsController, deleteProductsController } from './controllers/productController.js';
const port = process.env.PORT || 3000;

const server = http.createServer(async(req, res)=>{
try{
     if(req.url === '/' && req.method === 'GET'){
      getProductsController(req, res)
     }
     else if (req.method === 'POST' && req.url === '/add-products') {
      createProductsController(req, res)
     }
     else if(req.method === "PUT" && req.url.startsWith('/update-products/')){
      updateProductsController(req, res)
     }
     else if( req.method === "DELETE" && req.url.startsWith('/delete-products/')){
      deleteProductsController(req, res)
     }
     else {
        console.log("This route is not found")
        res.writeHead(404, {'Content-Type':'application/json'})
        res.end(JSON.stringify({message:"This route you are right now browsing is not found try be back to home /"}))
     }
     
}

catch(err){
    console.error("Error from server side",err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: 'Internal Server Error'}));


}
});

server.listen(port, ()=>{
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});
