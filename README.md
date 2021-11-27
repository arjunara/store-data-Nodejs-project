Hello everyone!

The following are the instruction to get http request.
1. first of all, I build this code in Visula Studio code using Node Js Run time environment.
2. Express JS is used as frame work
3. npm install to download npm node package, and start the server by typining node app.js.
4. Included http POST method, I get the JSON customer data through API request and modifies it according to given problem.
5. Results should be seen on app.http file by send request with JSON input data.
6. my Output response object as follows:
       HTTP/1.1 200 OK
       X-Powered-By: Express
       Content-Type: application/json; charset=utf-8
       Content-Length: 357
       ETag: W/"165-5qXwmdy4JzlaRFSbi2Nhk0Mi6Qc"
       Date: Sat, 27 Nov 2021 09:43:55 GMT
       Connection: close

       {
              "purchase_date": "Sat Nov 27 2021",
              "purchase_time": "3:13:55 pm",
              "List_of_commodities": [
                     {
                            "item": "Black Swan",
                            "total_price": 300,
                             "tax_rate": 0
                     },
                         {
                           "item": "Headache pills",
                           "total_price": 250,
                           "tax_rate": 12.5
                         },
                         {
                           "item": "Perfume",
                           "total_price": 4000,
                           "tax_rate": 720
                         },
                         {
                           "item": "Sandwich",
                           "total_price": 400,
                           "tax_rate": 20
                         }
                       ],
                   "final_bill_amount": "5417.375",
                    "total_tax": "752.5"
           }
There is an All-in-One Store that sells everything from groceries, medicines, clothes, books, music CDs, imported commodities etc. Standard tax rates apply on these commodities as below. 


-	5% on medicines and Food
-	5% on clothes below 1000 INR and 12% above 1000INR purchase
-	3% on music cds/dvds
-	Flat 18% on the imported commodities.
-	Books are exempted from tax.
-	On every purchase I get a receipt that has the below information :
-	Date and Time of purchase
-	List of commodities, each with their final price, tax amount with the applicable rate
-	Total amount payable
-	Additionally, a 5% discount is applied by the store if the bill exceeds 2000INR. 
The bill is sorted in the ascending order of the commodity names.

Write an API that computes the taxes and the final bill amount. Sample inputs are given below. Output should have the total amount, total tax. 

Input 1:
[{
       "item": "Headache pills",
       "itemCategory": "Medicine",
       "quantity": 5,
       "price": 50
   },
   {
       "item": "Sandwich",
       "itemCategory": "Food",
       "quantity": 2,
       "price": 200
   },
   {
       "item": "Perfume",
       "itemCategory": "Imported",
       "quantity": 1,
       "price": 4000
   },
   {
       "item": "Black Swan",
       "itemCategory": "Book",
       "quantity": 1,
       "price": 300
   }
]

Input 2 :
[{
       "item": "Classical Songs Collection",
       "itemCategory": "Music",
       "quantity": 1,
       "price": 500
   },
   {
       "item": "Pants",
       "itemCategory": "Clothes",
       "quantity": 2,
       "price": 1200
   }
]

Thank you.....
