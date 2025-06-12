"use strict";
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 8 },
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${selectedPizza} doesn't exist in this menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.error(`${order} doesn't exist in this menu`);
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken", price: 10 });
addNewPizza({ name: "Beef", price: 125 });
addNewPizza({ name: "Pork", price: 250 });
placeOrder("Chicken");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
