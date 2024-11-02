// imports
import { Alert, Avatar, Button } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import live from "../../assets/images/live.png";
import smile from "../../assets/images/smile.png";
import addImage from "../../assets/images/add-image.png";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { AuthContext } from "../../AppContext/AppContext";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  // Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { postsReducer, postActions, postStates } from "../../store/PostReducer";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import PostCard from "../postCards/PostCard";

const Main = () => {
  // states
  const text = useRef("");
  const { user, userData } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [state, dispatch] = useReducer(postsReducer, postStates);
  const [progressBar, setProgressBar] = useState(0);
  const scrollRef = useRef("");

  // links
  const collectionRef = collection(db, "posts");
  const postRef = doc(collection(db, "posts"));
  const document = postRef.id;

  // handle errors
  const { SUBMIT_POST, HANDLE_ERROR } = postActions;

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (text.current.value !== "") {
      try {
        await setDoc(postRef, {
          documentId: document,
          uid: user?.uid || userData?.uid,
          logo: user?.photoURL,
          name: user?.displayName || userData?.name,
          email: user?.email || userData?.email,
          text: text.current.value,
          image: image,
          timestamp: serverTimestamp(),
        });
        text.current.value = "";
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    } else {
      dispatch({ type: HANDLE_ERROR });
    }
  };
  // meta data from firestorage
  const metadata = {
    contentType: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ],
  };

  const storage = getStorage();

  // to handle the images
  const submitImage = async () => {
    const fileType = metadata.contentType.includes(file["type"]);
    if (!file) return;
    if (fileType) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          file,
          metadata.contentType
        );
        await uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressBar(progress);
          },
          (error) => {
            alert(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setImage(downloadURL);
              }
            );
          }
        );
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    }
  };
  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  // useEffect
  useEffect(() => {
    const postData = async () => {
      const q = query(collectionRef, orderBy("timestamp", "asc"));
      await onSnapshot(q, (doc) => {
        dispatch({
          type: SUBMIT_POST,
          posts: doc?.docs?.map((item) => item?.data()),
        });
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
        setImage(null);
        setFile(null);
        setProgressBar(0);
      });
    };
    return () => postData();
  }, [SUBMIT_POST]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg ">
          <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
            <Avatar
              size="sm"
              alt="avatar"
              src={user?.photoURL || avatar}
            ></Avatar>
            <form className="w-full" onSubmit={handleSubmitPost}>
              <div className="flex justify-between items-center">
                <div className="w-full ml-4">
                  <input
                    type="text"
                    name="text"
                    placeholder={`Whats on your mind ${
                      user?.displayName?.split(" ")[0] ||
                      userData?.name?.charAt(0).toUpperCase() +
                        userData?.name?.slice(1)
                    }`}
                    className="outline-none w-full bg-white rounded-md"
                    ref={text}
                  ></input>
                </div>
                <div className="mx-4">
                  {image && (
                    <img
                      src={image}
                      alt="previewImage"
                      className="h-24 rounded-xl"
                    />
                  )}
                </div>
                <div className="mr-4">
                  <Button variant="text" type="submit">
                    Share
                  </Button>
                </div>
              </div>
            </form>
          </div>
          {/* progress bar */}
          <span
            style={{ width: `${progressBar}%` }}
            className="bg-blue-700 py-1 rounded-md"
          >
            {/* progress bar later */}
          </span>
          <div className="flex justify-around items-center pt-4">
            <div className="flex items-center">
              {file && (
                <Button variant="text" onClick={submitImage}>
                  Upload
                </Button>
              )}

              <label
                htmlFor="addImage"
                className="cursor-pointer flex items-center"
              >
                <img className="h-10 mr-4" src={addImage} alt="addImage" />
                <input
                  id="addImage"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
              </label>
            </div>
            <div className="flex items-center">
              <img src={live} alt="live" />
              <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                Live
              </p>
            </div>
            <div className="flex items-center">
              <img className="h-10 mr-4" src={smile} alt="feeling" />
              <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                Feeling
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4 w-full">
          {state.error ? (
            <div className="flex justify-center items-center">
              <Alert color="red">
                Something went wrong refresh and try again...
              </Alert>
            </div>
          ) : (
            <div>
              {state.posts.length > 0 &&
                state?.posts?.map((post, index) => {
                  console.log("state.posts ====> ", state.posts)
                  return (
                    <PostCard
                      key={index}
                      logo={post?.logo}
                      id={post?.documentId}
                      uid={post?.uid}
                      name={post?.name}
                      email={post?.email}
                      image={post?.image}
                      text={post?.text}
                      timestamp={new Date(
                        post?.timestamp?.toDate()
                      )?.toUTCString()}
                    ></PostCard>
                  );
                })}
            </div>
          )}
        </div>
        <div ref={scrollRef}>{/* reference of post */}</div>
      </div>
    </>
  );
};

export default Main;
