'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here

// this is to get req from homepage when clicked on stocks order
app.get('/Stock_order', (req, res) => {
    res.sendFile(__dirname + '/public/stock_order.html',{ stocks });
});

// functions to find stock by symbol
function findStockBySymbol(symbol){
    return stocks.find(stocks => stocks.symbol === symbol);
  }

app.post('/recieved', (req,res)=>{

    const symbol = req.body.symbol;
    // console.log(req.query.symbol)//for debugging
    const qnty = req.body.qnty;

    // refrenced from : https://www.geeksforgeeks.org/how-to-add-a-404-error-page-in-the-express/
    if (qnty < 0) {
      res.status(400).send("Error: Quantity cannot be negative."); // this additional to handle negative values entered 
      return;
    }
    
    const stock_name = findStockBySymbol(symbol);
    // console.log(stock_name);//for debugging
    let total = stock_name.price * qnty;
    let price_dollar = total.toLocaleString("en-US", {style:"currency", currency:"USD"}); // this is to handle currency conversion
    res.send(`You placed an order to buy ${qnty} quantity stocks of ${stock_name.company}. The price of one stock is $${stock_name.price} and the total price is ${price_dollar}`);

})

// stock response form and function to find stock by price.

function findStockByPrice(response) {
    let stock_choosed;
    if (response === 'highest') {
      let high_price = Number.MIN_SAFE_INTEGER; 
      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].price > high_price) {
          high_price = stocks[i].price;
          // console.log(high_price); //for debugging
          stock_choosed = stocks[i];
          // console.log(stock_choosed); //for debugging
        }
      }
    } else if (response === 'lowest') {
      let low_price = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].price < low_price) {
          low_price = stocks[i].price;
          // console.log(low_price); //for debugging
          stock_choosed = stocks[i];
          // console.log(stock_choosed); //for debugging
        }
      }
    }
    return stock_choosed; 
}

app.get('/search', (req, res) => {
    const response = req.query.response;
    // if (!response) {
    //   res.status(400).send("You did not select any of the given options to search."); // this is someone clicks submit without choosing highest or lowest
    // }
    const stock = findStockByPrice(response);
    res.send(stock);
  });



app.get('/Stock_search', (req, res) => {
    res.sendFile(__dirname + '/public/stock_search.html');
});




// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});