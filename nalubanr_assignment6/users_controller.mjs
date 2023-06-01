import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './users_model.mjs';

const app = express();

const PORT = process.env.PORT;

/**
 * this is route handler for create request
 */
app.get("/create", asyncHandler(async(req,res) => {
    const user = await users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
    res.send(user);
}));

/**
 * this is route handler for retrieve request
 */
app.get('/retrieve', asyncHandler(async (req, res) => {
    //To do create the filter from the request
    const filter = {};
    if (req.query.name) {
      filter.name = req.query.name;
    }
    if (req.query.age) {
      filter.age = req.query.age;
    }
    if (req.query.email) {
      filter.email = req.query.email;
    }
    if (req.query.phoneNumber) {
      filter.phoneNumber = req.query.phoneNumber;
    }
    if (req.query._id) {
      filter._id = req.query._id;
    }
    const result = await users.findUsers(filter);
    res.send(result);
}));

/**
 * this is route handler for update request
 */
app.get('/update', asyncHandler(async (req, res) => {
  const query = { _id: req.query._id };

  const update = {};
  if (req.query.name) {
    update.name = req.query.name;
  }
  if (req.query.age) {
    update.age = req.query.age;
  }
  if (req.query.email) {
    update.email = req.query.email;
  }
  if (req.query.phoneNumber) {
    update.phoneNumber = req.query.phoneNumber;
  }

  const resultVal = await users.updateUser(query, update);

  if (resultVal.matchedCount === 0) {
    res.send({ "Error" : "Not found" });
  } else if (resultVal.modifiedCount=== 0) {
    res.send({ updateCount: 0 });
  } else {
    res.send({ updateCount: 1 });
  }
}));


/**
 * this is route handler for delete request
 */
  
app.get('/delete', asyncHandler(async (req, res) => {
  const remove = {};
  if (req.query._id) {
    remove._id = req.query._id;
  } 
  if (req.query.name) {
    remove.name = req.query.name;
  }
  if (req.query.age) {
    remove.age = req.query.age;
  }
  if (req.query.email) {
    remove.email = req.query.email;
  }
  if (req.query.phoneNumber) {
    remove.phoneNumber = req.query.phoneNumber;
  }
  const resultdel = await users.deleteUser(remove);
  res.send({ deletedCount: resultdel});
}));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});