import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ExerciseHead from "../components/ExerciseHead";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    });
    if (response.status === 201) {
      alert("Successfully added the Exercise");
    } else {
      alert(`Failed to add the exercise, status code = ${response.status}`);
    }
    navigate("/");
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <ExerciseHead />
          </tr>
        </thead>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter exercise name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Enter number of reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </td>
          <td>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="lbs">lbs</option>
              <option value="kgs">kgs</option>
            </select>
          </td>
          <td>
            <input
              type="text"
              placeholder="mm-dd-yy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <button onClick={addExercise}>Create</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default AddExercisePage;

  // return (
  //     <div>
  //         <h1>Add Exercise</h1>
  //         <input
  //             type="text"
  //             placeholder="Enter exercise name "
  //             value={name}
  //             onChange={e => setName(e.target.value)} />

  //         <input
  //             type="number"
  //             value={reps}
  //             placeholder="Enter number of reps"
  //             onChange={e => setReps(e.target.value)} />
  //         <input
  //             type="number"
  //             placeholder="Enter weight here"
  //             value={weight}
  //             onChange={e => setWeight(e.target.value)} />
  //         <input
  //             type="text"
  //             placeholder="Enter unit here"
  //             value={unit}
  //             onChange={e => setUnit(e.target.value)} />
  //         <input
  //             type="date"
  //             value={date}
  //             onChange={e => setDate(e.target.value)} />
  //         <button
  //             onClick={addExercise}
  //         >Add</button>
  //     </div>
  // );