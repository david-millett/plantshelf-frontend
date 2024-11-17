import { useState } from "react";
import { Routes, Route } from "react-router-dom";


// * Components
import NavBar from "./components/NavBar/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import PlantList from "./pages/PlantList/PlantList";
import PlantShow from "./pages/PlantShow/PlantShow";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";


const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantShow />} />
        { user ? (
          <Route path="/" element={<Dashboard />} />
        )
        : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
