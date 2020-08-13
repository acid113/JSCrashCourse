// base class
class Product {
  constructor(name, price, allowDiscount) {
    this.name = name;
    this.price = price;
    this.allowDiscount = allowDiscount;
  }

  isAllowDiscount() {
    return this.allowDiscount;
  }

  getPrice() {
    return `${this.price}`;
  }
}

const product1 = new Product('Coffee maker', 10, true);
console.log(product1);

// derived class
class SaleProduct extends Product {
  constructor(name, price, allowDiscount, percentOff) {
    // 'super()' IS REQUIRED
    super(name, price, allowDiscount); // passing params to the base constructor
    this.percentOff = percentOff;
  }

  applyDiscount() {
    if (this.isAllowDiscount()) {
      console.log('eligible for discount');
      this.price = this.price * ((100 - this.percentOff) / 100);
    }
  }
}

const saleProduct1 = new SaleProduct('Coffee maker', 10, true, 35);
console.log(saleProduct1);
console.log(`original price: ${saleProduct1.getPrice()}`);
saleProduct1.applyDiscount();
console.log(`discounted price: ${saleProduct1.getPrice()}`);
