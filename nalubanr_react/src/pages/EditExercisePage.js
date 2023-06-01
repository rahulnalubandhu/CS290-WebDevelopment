import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseHead from "../components/ExerciseHead";

export const EditExercisePage = ({ exerciseToEdit }) => {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);
  const navigate = useNavigate();

  const editExercise = async () => {
    const editedExercise = { name, reps, weight, unit, date };
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedExercise),
    });
    if (response.status === 200) {
      alert("Successfully edited the Exercise");
    } else {
      alert(`Failed to edit the exercise, status code = ${response.status}`);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <button onClick={editExercise}>Save</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default EditExercisePage;


  // return (
  //     <div>
  //         <h1>Edit Exercise</h1>
  //         <input
  //             type="text"
  //             value={name}
  //             onChange={e => setName(e.target.value)} />
  //         <input
  //             type="number"
  //             value={reps}
  //             onChange={e => setReps(e.target.value)} />
  //         <input
  //             type="number"
  //             value={weight}
  //             onChange={e => setWeight(e.target.value)} />
  //         <input
  //             type="text"
  //             value={unit}
  //             onChange={e => setUnit(e.target.value)} />
  //         <input
  //             type="date"
  //             value={date}
  //             onChange={e => setDate(e.target.value)} />
  //         <button
  //             onClick={editExercise}
  //         >Save</button>
  //     </div>
  // );