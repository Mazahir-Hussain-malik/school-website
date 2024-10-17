import "./App.css";
import { Home, Seniors, Juniors, NorthTech } from "./pages/index";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seniors" element={<Seniors />} />
        <Route path="/juniors" element={<Juniors />} />
        <Route path="/northtech" element={<NorthTech />} />
      </Routes>
    </>
  );
};

export default App;
