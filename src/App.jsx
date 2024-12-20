import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utils/auth";

// * Components
import NavBar from "./components/NavBar/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import PlantList from "./pages/PlantList/PlantList";
import PlantDetails from "./pages/PlantDetails/PlantDetails";
import MyPlantDetails from "./pages/MyPlantDetails/MyPlantDetails";

const App = () => {
  const [user, setUser] = useState(getUser())

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantDetails user={user} />} />
        { user ? (
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/my_plants/:myPlantId" element={<MyPlantDetails />} />
          </>
        )
        : (
            <Route path="/" element={<Landing />} />
        )}
      </Routes>
    </>
  );
};

export default App;
