// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, qtd) {
   cart.push({ product, qtd });
   console.log(`${qtd} ${product} added to cart`);
};

const totalPrice = 237;
const totalQtd = 23;

export { totalPrice, totalQtd as tq };

export default function (product, qtd) {
   cart.push({ product, qtd });
   console.log(`${qtd} ${product} added to cart`);
}
