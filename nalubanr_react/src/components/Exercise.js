import React from "react";
import ExerciseRow from "./ExerciseRow";
import ExerciseHead from "./ExerciseHead";

function Exercise({ exercises, exerciseDelete, exerciseEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <ExerciseHead />
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise, i) => (
          <ExerciseRow
            exercise={exercise}
            exerciseDelete={exerciseDelete}
            exerciseEdit={exerciseEdit}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Exercise;

// import {MdDeleteForever,MdEdit} from 'react-icons/md'

// function Exercise({ exercise , exerciseDelete, exerciseEdit}) {
//     return (
//         <tr>
//             <td>{exercise.name}</td>
//             <td>{exercise.reps}</td>
//             <td>{exercise.weight}</td>
//             <td>{exercise.unit}</td>
//             <td>{exercise.date}</td>
//             <td><MdEdit onClick={() => exerciseEdit(exercise)}/></td>
//             <td><MdDeleteForever onClick={() => exerciseDelete(exercise._id)}/></td>
//         </tr>
//     );
// }

// export default Exercise;
