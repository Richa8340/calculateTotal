function calculateTotal({ price, quantity }) {
    return price * quantity;
}

// Usage example
const order = { price: 25, quantity: 4 };
console.log(calculateTotal(order)); // Output: 100
