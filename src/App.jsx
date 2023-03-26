//library
import { Route, Routes } from "react-router-dom";

//css
import "./App.css";

//components
import { Signup } from "./components/Signup/Signup";
import { Toast } from "./components/Toast/Toast";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Signup />}></Route>
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
