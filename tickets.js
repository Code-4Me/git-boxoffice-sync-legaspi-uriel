function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium = false) {
  let total = quantity * basePrice;

  if (quantity >= 5) {
    total = total * 0.90;
  }

  if (premium) {
    total = total * 1.50;
  }

  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };