function sortProductsByPrice(products) {
  for (let i = 0; i < products.length; i++) {
    for (let k = 0; k < products.length - i - 1; k++) {
      if (products[k].price > products[k + 1].price) {
        let tmp;
        tmp = products[k].price;
        products[k].price = products[k + 1].price;
        products[k + 1].price = tmp;
      }
    }
    return products;
  }
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
