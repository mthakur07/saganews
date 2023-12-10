import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./componant/Header";

function App() {
  return (
    <div className="container mt-4">

      <Header/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;
