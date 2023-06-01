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
// Citation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// citation: https://stackoverflow.com/questions/30924271/correct-way-to-define-array-of-enums-in-json-schema

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, enum: ['kgs', 'lbs'], required: true},
    date: {
        type: String,
        required: true,
        default: () => new Date().toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit'
        })
    }
});


/**
 * Complie the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise",exerciseSchema);

/**
 * to create exercise
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit 
 * @param {String} date
 * @returns A promise. Resolve to the javascript object for the document created by calling save
 */
const createExercise = async (name,reps,weight,unit,date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save()
}

/** to retrieve exercise
 * Retrieve movie based on filter , projection and limit parameters
 * @param {Object} filter
 * @param {String} projection
 * @param {Number} limit
 * @returns
 */
const findExercise = async (filter, projection,limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit)
    return query.exec();
}

/**
 * @param {String} _id
 * @returns
 */
const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

/**
 * @param {String} _id
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit 
 * @param {String} date
 * @returns A promise. Resolve to the javascript object for the document created by calling save
 */

const replaceExercise =  async(_id, name,reps,weight,unit,date) => {
    const result = await Exercise.replaceOne({_id: _id},{name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
}


db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {createExercise,findExercise,findExerciseById,replaceExercise,deleteById};