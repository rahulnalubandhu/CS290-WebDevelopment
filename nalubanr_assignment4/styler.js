"use strict";
// Refrence: https://stackoverflow.com/questions/30401880/switching-between-multiple-css-files-using-javascript and modules
// https://replit.com/@coecs290

function ButtonClick_A(){
    let link = document.getElementById("styleSheet"); //get the link by its ID
    link.setAttribute("href", "styleA.css");
}

function ButtonClick_B(){
    let link = document.getElementById("styleSheet"); //get the link by its ID
    link.setAttribute("href", "styleB.css");
}

