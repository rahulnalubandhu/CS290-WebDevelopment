import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.
/* Add your code here */


let count_of_request = 0;


function middleware(_req, _res, next) {
    count_of_request++;
    if (count_of_request % 10 === 0) { //when count_of_request reach 10 % 10 becomes 0 then it goes inside and prints the statment simallry for 20,30...
        console.log(`Total retrieve requests: ${count_of_request}`);
    }
    next();
}

// Refrence: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//Refrence : https://canvas.oregonstate.edu/courses/1901690/pages/exploration-writing-asynchronous-code
app.get("/random-person", middleware ,(_req, res) => {
    fetch("https://randomuser.me/api/")
        .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Error in response from API');
        }
        })
        .then(data => {res.status(200).json(data);
        })
        .catch(error => {
        console.error('Error in API request:', error);
        });
});
  
// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});