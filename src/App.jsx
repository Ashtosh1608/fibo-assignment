import { useState } from 'react';
import './App.css';
import { Goal } from './Components/Goal/Goal';
import { Progresss } from './Components/Progress/Progresss';
import { Graph } from './Components/Graph/Graph';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page2 } from './Components/Pages/Page2';
import { Page3 } from './Components/Pages/Page3';
import { Page4 } from './Components/Pages/Page4';

function App() {
  const [value, setValue] = useState(40);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Progresss value={value} />
              <Goal value={value} setValue={setValue} />
              <Graph />
            </>
          }
        />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
