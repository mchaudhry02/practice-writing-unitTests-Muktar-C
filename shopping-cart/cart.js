function addItem(cart, item, quantity) {
  if (!item || quantity <= 0) return;

  if (!cart[item]) {
    cart[item] = 0;
  }
  cart[item] += quantity;
}

function removeItem(cart, item) {
  if (!cart[item]) return;
  delete cart[item];
}

function getTotalItems(cart) {
  let total = 0;
  for (let item in cart) {
    total += cart[item];
  }
  return total;
}

module.exports = { addItem, removeItem, getTotalItems };
