import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Newslist from "./page/Newslist/Newslist";
import Mainpage from "./page/Mainpage/Mainpage";
import Newdetail from "./page/Newdetail/Newdetail";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="flex-grow w-full ">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/Newslist" element={<Newslist />} />
            <Route path="/Newdetail/:id" element={<Newdetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
