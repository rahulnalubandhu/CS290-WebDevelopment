import React from "react";
import Exercise from "../components/Exercise";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  const exerciseDelete = async (id) => {
    const response = await fetch(`/exercises/${id}`, { method: "DELETE" });
    if (response.status === 204) {
      const getResponse = await fetch("/exercises");
      const exercises = await getResponse.json();
      setExercises(exercises);
    } else {
      console.error(
        `Failed to delete exercises with id = ${id}, staus code = ${response.status}`
      );
    }
  };

  const exerciseEdit = (exercise) => {
    setExerciseToEdit(exercise);
    navigate("/edit-exercise");
  };

  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const data = await response.json();
    setExercises(data);
    // for debugging
    // console.log(data);
    // console.log(exercises);
    // console.log(exercises.length);
  };

  useEffect(() => {
    loadExercises();
  }, []);

  // return (
  //     <>
  //         <h2>List of Exercises</h2>
  //         <ExerciseList exercises={exercises} exerciseDelete = {exerciseDelete} exerciseEdit = {exerciseEdit}></ExerciseList>
  //         <Link to="/add-exercise">Add an exercise</Link>
  //     </>
  // );

  return (
    <>
      <h2>List of Exercises</h2>
      <Exercise
        exercises={exercises}
        exerciseDelete={exerciseDelete}
        exerciseEdit={exerciseEdit}
      />
    </>
  );
}

export default HomePage;
