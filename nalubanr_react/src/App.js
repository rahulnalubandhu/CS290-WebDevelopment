import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
          <header className="App-header">
            <h1>Exercise Tracker</h1>
            <p className="subtag">Transform your fitness journey with Exercise Tracker - the ultimate workout companion</p>
            <Navigation />
          </header>
            <Routes>
              <Route
                path="/"
                element={<HomePage setExerciseToEdit={setExerciseToEdit} />}
              ></Route>
              <Route path="/add-exercise" element={<AddExercisePage />}></Route>
              <Route
                path="/edit-exercise"
                element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}
              ></Route>
            </Routes>
          <footer className="App-footer">
            <p>© 2023 Rahul kumar Nalubandhu</p>
          </footer>
      </Router>
    </div>
  );
}

export default App;


  // return (
  //   <div className="App">
  //     <Router>
  //       <div className="App-header">
  // 	  <Routes>
  //         <Route path="/" element={<HomePage setExerciseToEdit = {setExerciseToEdit}/>}/>
  //         <Route path="/add-exercise" element={<AddExercisePage />}/>
  //         <Route path="/edit-exercise" element={ <EditExercisePage  exerciseToEdit = {exerciseToEdit}/>}/>
  // 	  </Routes>
  //         </div>
  //     </Router>
  //   </div>
  // );