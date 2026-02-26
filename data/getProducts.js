import fs from 'fs/promises'

export default async function getProducts(){
    try{
      const products = await fs.readFile('./data/products.json', 'utf8')
      return JSON.parse(products)
    }
    catch(error){
        console.log("Error can not get the products: ", error)
        return []
    }
}