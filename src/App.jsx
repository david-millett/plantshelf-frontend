// import { useState } from "react";
import { Routes, Route } from "react-router-dom";


// * Components
import NavBar from "./components/NavBar/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import PlantList from "./pages/PlantList/PlantList";
import PlantShow from "./pages/PlantShow/PlantShow";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";


const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantShow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
