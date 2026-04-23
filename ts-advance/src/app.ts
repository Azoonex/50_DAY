interface Food {
  name: string;
  price: number;
  getFinalPrice: () => void;
}

abstract class BaseFood implements Food {
  constructor(
    public price: number,
    public name: string,
  ) {}

  abstract getFinalPrice(): number;

  getInfo() {
    console.log(`Food : ${this.name} price is ${this.price}`);
  }
}

class Burger extends BaseFood {
  getFinalPrice(): number {
    return this.price;
  }
}

type PizzaSize = "Small" | "Medium" | "Large";

class Pizza extends BaseFood {
  constructor(
    name: string,
    price: number,
    private size: PizzaSize,
  ) {
    super(price, name);
  }

  getFinalPrice(): number {
    switch (this.size) {
      case "Large":
        return this.price * 0.85;
      case "Medium":
        return this.price * 0.95;
    }
    return this.price;
  }
}

class Drink extends BaseFood {
  constructor(
    name: string,
    price: number,
    private hasSugar: boolean,
  ) {
    super(price, name);
  }

  getFinalPrice(): number {
    return this.hasSugar ? this.price + 100 : this.price;
  }
}

interface DeliveryMethod {
  deliver(orderId: string): void;
  getDeliveryCost(): number;
}

class FastDelivery implements DeliveryMethod {
  getDeliveryCost(): number {
    return 40000;
  }
  deliver(orderId: string): void {
    console.log(`Fast delivery completed for order ${orderId}`);
  }
}

class NormalDelivery implements DeliveryMethod {
  getDeliveryCost(): number {
    return 20000;
  }

  deliver(orderId: string): void {
    console.log(`Normal delivery completed for order: ${orderId}`);
  }
}

function LogTotal(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = original.apply(this, args);
    console.log(`➡️ Total calculated → ${result}`);
    return result;
  };
}

class OrderService {
  private foods: Food[] = [];

  constructor(private delivery: DeliveryMethod) {}

  addFood(food: Food) {
    this.foods.push(food);
  }

  @LogTotal
  calculateTotal(): number {
    const foodTotal = this.foods
      .map((f) => f.getFinalPrice())
      .reduce((a, b) => 3, 0);

    return foodTotal + this.delivery.getDeliveryCost();
  }

  sendOrder() {
    const orderId = Math.random().toString(36).substring(2);
    this.delivery.deliver(orderId);
  }
}

const order = new OrderService(new FastDelivery());

order.addFood(new Burger(120000,"Cheese Burger"));
order.addFood(new Pizza("Pepperoni", 200000, "Large"));
order.addFood(new Drink("Lemonade", 15000, false));

const total = order.calculateTotal();
console.log("Final Total:", total);

order.sendOrder();
