import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getPosts,
  updateDocId,
  updatePost,
} from "../../store/Slices/feedSlice.jsx";
import Button from "../Button/Button.jsx";
import { useEffect } from "react";

function FeedList() {
  // data ko read karne k liye useSeletor ka use karna hy after add the data in firebase we shall read the data
  const feeds = useSelector((store) => store.feedSlice.feeds);
  console.log("feeds in db", feeds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (docId) => {
    console.log("Deleted post id:", docId);
    dispatch(deletePost(docId));
  };

  const handleUpdate = (docId) => {
    dispatch(updateDocId(docId));
  };

  // const date = new Date(feeds?.createAt.toDate()).toLocaleDateString();
  // console.log(date);
  

  return (
    <>
      <hr style={{ marginTop: "30px" }} />
      <h1>Feed Listing</h1>
      {/* map the feeds  */}

      {feeds?.map((feed) => (
        <div key={feed?.docId}>
          <img src={feed?.imageURL} alt={feed?.title} /> <h3>{feed?.title}</h3>
          <p>{feed?.description}</p>
          <Button
            title="Delete"
            onClickHandler={() => handleDelete(feed?.docId)}
          />
          <button onClick={() => handleUpdate(feed?.docId)}>update</button>
        </div>
      ))}
    </>
  );
}

export default FeedList;
