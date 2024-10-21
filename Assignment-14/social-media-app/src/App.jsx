import "./App.css";
import Pages from "./pages/page/Pages";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext/AppContext";
function App() {
  return (
    <>
      <h1 className="App">
        <BrowserRouter>
        <AppContext>
          <Pages />

        </AppContext>
        </BrowserRouter>
        
      </h1>
    </>
  );
}

export default App;
