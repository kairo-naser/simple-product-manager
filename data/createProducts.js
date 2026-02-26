import fs from 'fs/promises'

export default async function createProducts(item){
    try{
        // reading files
        const readProducts  =await fs.readFile('./data/products.json', 'utf8')
        const products = JSON.parse(readProducts)
        products.push(item)


        // saving the items
        await fs.writeFile('./data/products.json', JSON.stringify(products, null, 2), 'utf8')
        return products
    }
    catch(error){
        console.log("Error creating products: ", error)
        return []
    }
}