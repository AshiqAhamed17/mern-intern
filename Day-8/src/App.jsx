//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';


function App() {
    const [data, setData] = useState();

    useEffect(() => {
        const res = fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = res.json();
        setData(jsonData);
    }, [data]);
  return (
    <Router>
      <div>
        <Navbar /> {/* Render Navbar component */}
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <p> data : {data}</p>
        </div>
      </div>
    </Router>
  );
}


function Home() {
  return(
    <div>
      <h2>Welcome to the Home Page</h2>
     
    </div>
  ) 

}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}


export default App;