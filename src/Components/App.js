import '../App.css';
import { Route, Routes } from "react-router-dom";


import NavBar from "./NavBar"
import ReviewPage from './ReviewPage';


function App() {
  return (
    <div >
      <NavBar />
      <Routes>
          <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </div>
  );

}

export default App;
