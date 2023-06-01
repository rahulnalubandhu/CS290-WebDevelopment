import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

/**
 * Define the schema
 */

const usersschema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: false}
});


/**
 * Complie the model from the schema. This must be done after defining the schema.
 */
const User = mongoose.model("User",usersschema);

/**
 * 
 * @param {String} name 
 * @param {Number} age 
 * @param {String} email
 * @param {Number} phoneNumber 
 * @returns A promise. Resolve to the javascript object for the document created by calling save
 */

const createUser = async (name,age,email,phoneNumber) => {
    const user = new User({name: name, age: age, email: email, phoneNumber: phoneNumber});
    return user.save()
}

const findUsers = async (filter) => {
    const query = User.find(filter);
    return query.exec();
}

const updateUser = async (filter, update) => {
    const result = await User.updateOne(filter, update);
    return {
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount
    };
  };
  

const deleteUser = async (filter) => {
    const result = await User.deleteMany( filter);
    return result.deletedCount;
};

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {createUser,findUsers,updateUser,deleteUser};