import { MdDeleteForever, MdEdit } from "react-icons/md";
import React from "react";

function ExerciseRow({ exercise, exerciseDelete, exerciseEdit }) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>
        <MdEdit className="editButton" onClick={() => exerciseEdit(exercise)} />
      </td>
      <td>
        <MdDeleteForever
          className="deleteButton"
          onClick={() => exerciseDelete(exercise._id)}
        />
      </td>
    </tr>
  );
}

export default ExerciseRow;
