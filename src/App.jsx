import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-5 mb-5 text-danger">
                Page not found
              </h1>
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
export default App;
