import { TypeProduct } from "./src/types/types";

class Product {
  protected prodData: TypeProduct[] = [
    {
      name: "note-book",
      purchase_price: 2000,
      sell_price: 25000,
      sell_price2: 270000,
    },
  ];
}

class ProductMethod extends Product {
  messageError = "Please add some product";
  constructor() {
    super();
  }

  get logData() {
    return this.prodData;
  }

  addNewProduct(newProduct: TypeProduct) {
    if (!newProduct) {
      return this.messageError;
    }
    this.prodData.push(newProduct);
  }

  updateProduct(name: string, newData: TypeProduct) {
    if (!name && !newData) {
      return this.messageError;
    }
    let findItem = this.prodData.find((product) => product.name === name);
    if (findItem) {
        // todo add logic with update product
    } else {
      return "your Product is not found!";
    }
  }
}

const productMethod = new ProductMethod();
const productParent = new Product()
productMethod.addNewProduct({
  name: "Phone",
  sell_price: 20_000_000,
  purchase_price: 10_000_00,
  sell_price2: 80_000_500,
});

console.log(productMethod.logData);
