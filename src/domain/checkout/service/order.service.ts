import Order from "../entity/order"
import Customer from "../../customer/entity/customer"
import OrderItem from "../entity/order_item"
import { uuid } from "uuidv4"

export default class OrderService {

  static placeOrder (customer: Customer, orderItems: OrderItem[]): Order {
    if (orderItems.length === 0) throw new Error("Order must have at least one order item")

    const order = new Order(uuid(), customer.id, orderItems)
    customer.addRewardPoints(order.totalPrice() / 2)
    return order
  }

  static totalPrice (orders: Order[]): number {
    return orders.reduce((acc, order) => {
      return acc + order.totalPrice()
    }, 0)
  }

}