import fs from 'fs/promises'

export default async function deleteProducts(id){
    try{
        // reading files from products.json file
      const readProducts = await fs.readFile('./data/products.json', 'utf8')
      const products = JSON.parse(readProducts)
    //   changing id to number and checking if its valid number
      const itemId = Number(id)
      if(isNaN(itemId)){
        console.log(`The id:${itemId} is not found`)
        return 
      }
    //   checking id if is in the products 
      const index = products.findIndex(i => Number(i.id) === itemId)
      if(index === -1){
        console.log(`Product with that id ${itemId} is not found`)
        return 
      }
    //   deleting item and saving it
      const deleteItem = products.splice(index, 1)
      await fs.writeFile('./data/products.json', JSON.stringify(products, null, 2), 'utf8')
      return deleteItem[0]
    }
    catch(error){
        console.log("Error deleting products: ", error)
        return []
    }
}