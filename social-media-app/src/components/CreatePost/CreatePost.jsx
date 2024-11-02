import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/Slices/feedSlice.jsx";
import { updatePost } from "../../store/Slices/feedSlice.jsx";
import Button from "../Button/Button.jsx";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase.js";
import { styled, TextField } from "@mui/material";

function CreatePost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const post = useSelector((store) => store.feedSlice.updatePost);
  // console.log("post", post);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [post]);

  // add the data in firebase
  // handle post function
  const handlePost = () => {
    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    // Create the post object
    const postData = {
      title,
      description,
      imageURL,
    };

    // Dispatch the action to add the post
    if (post) {
      dispatch(updatePost({ ...postData, docId: post.docId }));
      return;
    }

    dispatch(createPost({ ...postData, file, setLoading }));

    setTitle("");
    setDescription("");
    setImageURL(null);
  };

  // const uploadImage = async (e) => {
  // try {
  //   const file = e.target.files[0];
  //   console.log("image URL => ", file);
  // const fileRef = ref(
  //   storage,
  //   "images/" + parseInt(Math.random() * 94853795305) + file.name
  // );
  // const metadata = {
  //   contentType: file.type,
  // };
  // const response = await uploadBytes(fileRef, file, metadata);
  // const url = await getDownloadURL(fileRef);
  // console.log("response from storage", response);
  // console.log("getDownloadURL from db", url);
  // setImageURL(url);
  // } catch (error) {
  //   console.log("error during uploading image", error);
  //   return;
  // }

  // };
  // image ko change karne ka function
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    console.log("change image file", file);

    setFile(file);
  };

  return (
    <>
      <h1>Create post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <TextField
        id="standard-basic"
        variant="standard"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={handleChangeImage} />
      {loading ? (
        <p>Loading..</p>
      ) : (
        <Button
          title={post ? "update Post" : "CreatePost"}
          onClickHandler={handlePost}
        />
      )}
    </>
  );
}

export default CreatePost;
