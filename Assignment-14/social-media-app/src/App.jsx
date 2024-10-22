import "./App.css";
import Pages from "./pages/page/Pages";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext/AppContext";
import logo from "../src/assets/nexxa.png";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 3 seconds (or until actual data loading is done)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // You can adjust the time based on your needs
  }, []);
  return (
    <>
       <div className="App">
      <BrowserRouter>
        <AppContext>
         
          {loading ? (
            <div className="loading-container">

              <img src={logo} alt=""  className="loading-logo" /> 
            </div>
          ) : (
            <Pages />     
          )}
        </AppContext>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
