class Product {
    constructor(name, price, code){
        this.name = name;
        this.price = price;
        this.code = code;
    }
}

class ProductManager {
    products;
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if(this.products.find(x => x.code ===  product.code)){
            return console.log("Product already exists");
        }
        else if(product.name == null || product.price == null || product.code == null){
            return console.log("some date is null");
        }
        else{
            product.id = this.idGenerator()
            this.products.push(product);
        }
    }

    getProducts() {
        if(this.products.length > 0){
            console.log(this.products);
        }else{
            console.log("no products found")
        }
    }

    getProductById(id) {
        if(this.products.find(product => product.id === id)){
            let productToGet = this.products.find(product => product.id === id)
            console.log(productToGet)
        }else{
            console.log("The id of the product to get is not found")
        }
    }

    idGenerator(){
        if(this.products.length > 0){
            let id = this.products.map(product => product.id)
            return Math.max(...id) + 1
        }else{
            let id = 1
            return id
        }
    }
}


const productManager = new ProductManager

let product1 = new Product('casa', 10000 , '123123')
// let product2 = new Product('casa2', 22222 , 'a2a')
// let product3 = new Product('casa2', 22222 , '23')


productManager.addProduct(product1)
//productManager.addProduct(product2)
// productManager.addProduct(product3)

productManager.getProductById(1)

productManager.getProducts()

