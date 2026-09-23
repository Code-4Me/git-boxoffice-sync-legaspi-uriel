function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium = false) {
  let total = quantity * basePrice;

  if (premium) {
    total = total * 1.50;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };