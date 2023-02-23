import "./App.css";

import Home from "./components/Home";
import JobList from "./components/JobsList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ApplyJob from "./components/ApplyJob";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs-list" element={<JobList />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/apply/:id/:position" element={<ApplyJob />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
