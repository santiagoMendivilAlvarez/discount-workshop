function calculateDiscount(price, memberType) {
  if (price <= 0) {
    throw new Error('price must be positive');
  }
  let finalPrice = price;
  if (memberType === 'gold') {
    finalPrice = price * 0.85;
  } else if (memberType === 'silver') {
    finalPrice = price * 0.9;
  }
  return Math.round(finalPrice * 100) / 100;
}

module.exports = calculateDiscount;
