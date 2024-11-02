import { useDispatch } from "react-redux";
import CreatePost from "../components/CreatePost/CreatePost";
import FeedList from "../components/ProductList/FeedList";
import { logout } from "../store/Slices/authSlice";

const Home = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
   dispatch(logout())
  };
  return (
    <>
      <CreatePost />
      <br />
      <br />
    <button onClick={handleLogout}>Log out</button>
      <FeedList />
    </>
  );
};

export default Home;
