const calculateTotalCost = (customerName, products, discount = 0 ) => {

    let totalValue = 0;

    for(let i = 0; i < products.length; i++){
        totalValue += products[i].price * products[i].quantity
    }

    if(discount == 0){
        return(`Olá, ${customerName}! O total da sua compra é R$${totalValue} (sem desconto).`)
    }else if (discount != 0){
      let descountedValue = totalValue - (totalValue*discount/ 100);

        return(`Olá, ${customerName}! O total da sua compra é R$${descountedValue.toFixed(2)} (${discount}% de desconto).`) 
    }
}
