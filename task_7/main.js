let purchase = {
    productName: "Футболка",
    quantity: 2,
    unitPrice: 15,
  };
  
  purchase.totalCost = purchase.quantity * purchase.unitPrice;
  
  for (let key in purchase) {
    console.log(`${key}: ${purchase[key]}`);
  }
  
  if (purchase.totalCost > 50) {
    console.log("Покупка крупная");
  } else {
    console.log("Покупка небольшая");
  }