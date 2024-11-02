import Routing from "./Routing/Routing";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/Slices/authSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(setLoading));
  }, [dispatch]);

  return <>{loading ? <h1>Loading...</h1> : <Routing />}</>;
}

export default App;
