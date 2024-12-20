import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Leftbar from "./components/Leftbar/Leftbar";

import Newslist from "./components/Newslist/Newslist";
import Mainpage from "./components/Mainpage/Mainpage";
import Newdetail from "./components/Newdetail/Newdetail";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="flex-grow w-full ">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/Newslist" element={<Newslist />} />
            <Route path="/Newdetail" element={<Newdetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
