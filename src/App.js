import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => <h1>I am the shop xD</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
