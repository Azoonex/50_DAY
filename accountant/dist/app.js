"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor() {
        this.prodData = [
            {
                name: "note-book",
                purchase_price: 2000,
                sell_price: 25000,
                sell_price2: 270000,
            },
        ];
    }
}
class ProductMethod extends Product {
    constructor() {
        super();
        this.messageError = "Please add some product";
    }
    get logData() {
        return this.prodData;
    }
    addNewProduct(newProduct) {
        if (!newProduct) {
            return this.messageError;
        }
        this.prodData.push(newProduct);
    }
    updateProduct(name, newData) {
        if (!name && !newData) {
            return this.messageError;
        }
        let findItem = this.prodData.find((product) => product.name === name);
        if (findItem) {
            // todo add logic with update product
        }
        else {
            return "your Product is not found!";
        }
    }
}
const productMethod = new ProductMethod();
const productParent = new Product();
productMethod.addNewProduct({
    name: "Phone",
    sell_price: 20000000,
    purchase_price: 1000000,
    sell_price2: 80000500,
});
console.log(productMethod.logData);
