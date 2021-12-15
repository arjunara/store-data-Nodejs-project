let totalBill = 0 
let totalTax = 0

const calculateTotalBill = (productList)=> {
    
    productList.forEach(each => {
        if (each.itemCategory === 'Medicine' || each.itemCategory === 'Food'){
            let medFoodAmount = each.price * each.quantity
            tax = (medFoodAmount * 5) / 100  // tax rate on Food and Medicine items is 5% //
            totalBill += medFoodAmount + tax
            totalTax += tax
        }
        else if (each.itemCategory === 'Clothes'){
            let clothsAmount = each.price * each.quantity
            if (clothsAmount < 1000){
                tax = (clothsAmount * 5) /100   // tax rate on Cloth items is 5% if amount is less than RS. 1000 //
            }else{
                tax = (clothsAmount * 12) / 100   // tax rate on Cloth items is 12% if amount is more than RS.1000 //
            }
            totalBill += clothsAmount + tax
            totalTax += tax
        }
        else if (each.itemCategory === 'Music'){
            let musicAmount = each.price * each.quantity
            tax = (musicAmount * 3) /100   // tax rate on Music items is 3% //
            totalBill += musicAmount + tax
            totalTax += tax
        }
        else if (each.itemCategory === 'Imported'){
            let importedAmount = each.price * each.quantity
            tax = (importedAmount * 18) /100   // tax rate on Imported items is 18% //
            totalBill += importedAmount + tax
            totalTax += tax
        }
        else if (each.itemCategory === 'Book'){
            totalBill += each.price * each.quantity   // No tax rate on Books //
        }
    });

    let finalBill
    if (totalBill > 2000){
        finalBill = totalBill - (totalBill * 5) / 100    // if total bill exceeds RS.2000, then discount is 5% //
    }else{
        finalBill = totalBill
    }
    return {"final_bill_amount": finalBill.toString(), "total_tax" : totalTax.toString()}
}

module.exports = calculateTotalBill
