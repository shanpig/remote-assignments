function avg(data){
  let sum = data.products.reduce((acc, product)=>acc + product.price, 0);
  return sum / data.products.length;
}

console.log(avg({
  size:3,
  products:[
    {name:"Product 1", price:100},
    {name:"Product 2", price:700},
    {name:"Product 3", price:250},
  ]
})); // expected 350