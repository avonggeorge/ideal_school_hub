import { Routes, Route } from 'react-router-dom'; // Import components

import HomePage from '../components/HomePage'; // Import your components

// import About from './components/About';



function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />  

      {/* <Route path="/about" element={<About />} />  */}

    </Routes>

  );

}



export default App;
