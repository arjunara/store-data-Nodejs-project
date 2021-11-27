const getItemsList = (itemsList) => {
    const itemPriceWithtaxrate = itemsList.map(each =>{
        if (each.itemCategory === 'Medicine' || each.itemCategory === 'Food'){
            let medFoodAmount = each.price * each.quantity
            return {'item' : each.item, 'total_price' : medFoodAmount, 'tax_rate' : (medFoodAmount * 5) / 100}
        }
        if (each.itemCategory === 'Clothes'){
            let clothsAmount = each.price * each.quantity
            if (clothsAmount < 1000){
                tax = (clothsAmount * 5) /100
            }else{
                tax = (clothsAmount * 12) / 100
            }
            return {'item' : each.item, 'total_price' : clothsAmount, 'tax_rate' : tax}
        }
        if (each.itemCategory === 'Music'){
            let musicAmount = each.price * each.quantity
            return {'item' : each.item, 'total_price' : musicAmount, 'tax_rate' : (musicAmount * 3) /100}
        }
        if (each.itemCategory === 'Imported'){
            let importedAmount = each.price * each.quantity
            return {'item' : each.item, 'total_price' : importedAmount, 'tax_rate' : (importedAmount * 18) /100}
        }
        if (each.itemCategory === 'Book'){
            return {'item' : each.item, 'total_price' : each.price * each.quantity, 'tax_rate' : 0}
        }
    })
    return itemPriceWithtaxrate
}

module.exports = getItemsList