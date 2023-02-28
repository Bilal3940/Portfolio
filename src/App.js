
import './App.scss';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
    return (
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} exact/>
        
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        {/* // <Route path = "/leaderboard" element={<Con />} /> */}
        </Route>
        </Routes>
      );
}

export default App;

// import './App.scss';
// import Layout from './components/Layout';
// import {Routes, Route} from 'react-router-dom';
// import About from './components/About';
// import Home from './components/Home';
// import Contact from './components/Contact';
// function App() {
//   return (
//     <Routes>
//     <Route path='/' element={<Layout/>}>
//     <Route index element={<Home />} exact/>
    
//     <Route path = "/about" element={<About />} />
//     <Route path = "/contact" element={<Contact />} />
//     {/* // <Route path = "/leaderboard" element={<Con />} /> */}
//     </Route>
//     </Routes>
//   );
// }

// export default App;

