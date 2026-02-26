import fs from 'fs/promises'

export default async function updateProducts(id, item){
    try{
        // reading files
        const readProducts =await  fs.readFile('./data/products.JSON', 'utf8')
        const products  =  JSON.parse(readProducts) 
        const itemId = Number(id)
        if(isNaN(itemId)){
            console.log(`invalid id: ${itemId}`)
            return 
        }

       
        const index = products.findIndex(i => i.id === itemId)
        if(index === -1){
            console.log(`Product with that id ${itemId} is not found`)
            return
        }

        products[index] = {...products[index], ...item}
        await fs.writeFile('./data/products.json', JSON.stringify(products, null, 2), 'utf8')
        return products[index]



    }
    catch(error){
      console.log("Error updating products: ", error)
    }
}