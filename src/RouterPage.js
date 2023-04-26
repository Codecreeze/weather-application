import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Dashboard/Home';
import NotFound from './Pages/NotFound';





function RouterPage() {



  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>


    </div>
  );
}

export default RouterPage;
