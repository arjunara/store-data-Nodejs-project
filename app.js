const express = require('express')
const getTotalBillAmount = require('./totalBillCalculator.js')
const getItemsList = require("./itemsList.js")

const app = express()
app.use(express.json())

app.post("/bill", (request, response)=> {
    try{
        const customerData = request.body
        if (customerData === undefined || customerData.length === 0){
            response.send("There is no selected Commodities")
        }else{
            const bill = getTotalBillAmount (customerData)
            const date = new Date()
            const dateAndTime = {
                            "purchase_date" : date.toDateString(), 
                            "purchase_time" : date.toLocaleTimeString()
                        }
    
            const productList = getItemsList(customerData)
            productList.sort((a, b)=> {         // sorting shopping items in the ascending order of the commodity names. //

                let item1 = a.item.toLowerCase()   // ignore the case sensitive while sorting //
                let item2 = b.item.toLowerCase() 
                if (item1 < item2){
                return -1
                }
            })
            response.send({...dateAndTime, 'List_of_commodities' : productList, ...bill})
        }
    }catch(e){
        console.log(e)
    }
})

app.listen(3000, ()=> {
    console.log("server is running.....on http://localhost:3000/bill")
})