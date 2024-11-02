import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { storage } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// thunk reducers jab internet se data lena ya dena hy tu thunk actions banate hen
// add post in firestore
export const createPost = createAsyncThunk("feeds/addPost", async (post) => {
  try {
    // change image logic
    post.setLoading(true);
    const file = post.file;
    const fileRef = ref(
      storage,
      "images/" + parseInt(Math.random() * 94853795305) + file.name
    );
    const metadata = {
      contentType: file.type,
    };
    await uploadBytes(fileRef, file, metadata);
    const url = await getDownloadURL(fileRef);

    const updatedPost = {
      title: post.title,
      description: post.description,
      createdAt: new Date(),
      imageURL: url,
    };
    post.setLoading(false);

    // add data in db
    const collectionRef = collection(db, "posts");
    const response = await addDoc(collectionRef, updatedPost);
    console.log("data is added in firebase db", response);
    const newPost = { docId: response.id, ...post }; // Include the generated id
    console.log("Data added in Firebase DB:", newPost);
    return newPost;
  } catch (err) {
    console.log("error during add the data in db", err);
  }
});

// data read karne k liye function banaye ge
export const getPosts = createAsyncThunk("feeds/getPosts", async () => {
  try {
    const collectionRef = collection(db, "posts");
    const queryRef = query(collectionRef);

    // one time data read krne k liye
    const docRes = await getDocs(queryRef); // sara data hame docRes me mil jaye ga jo db me para
    let data = [];
    docRes.forEach((singleDocument) => {
      // console.log(singleDocument.data());
      data.push({
        docId: singleDocument.id,

        ...singleDocument.data(),
      }); // sara data hame data me push karega
    });
    // console.log(data);

    return data;

    // realtime data read krne k liye
    // let data = [];
    // onSnapshot(collectionRef, (querySnap) => {
    //   querySnap.forEach((doc) => {
    //    data = [...data, {id:doc.id,...doc.data()}]
    //    console.log(doc.data());

    //   })

    //   return data; // data return karega jisme sara data hame mil jaye ga
    // })
  } catch (err) {
    console.log("error during geting data from db", err);
  }
});

// data ko delte karne ka funtion
export const deletePost = createAsyncThunk(
  "feeds/deletePost",
  async (docId) => {
    try {
      if (!docId) throw new Error("Document ID is undefined.");
      const docRef = doc(db, "posts", docId);
      await deleteDoc(docRef);
      console.log("Deleted post ID:", docId);

      return docId;
    } catch (error) {
      console.log("error during deleting data from db", error);
    }
  }
);

// data ko update karne ka method
export const updatePost = createAsyncThunk("feeds/updatePost", async (post) => {
  try {
    const docRef = doc(db, "posts", post.docId);
    await updateDoc(docRef, post);
    console.log("Data updated in Firebase DB:", post);
    return post;
  } catch (error) {
    console.log("error during updating data in db", error);
  }
});
// simple reducers

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feeds: [],
    updatePost: null,
  },

  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    addPost: (state, action) => {
      state.feeds = [action.payload, ...state.feeds];
      console.log(action.payload);
    },
    updateDocId: (state, action) => {
      const post = state.feeds.find((post) => post.docId === action.payload);
      state.updatePost = post || null;
    },
  },

  // extra reducers

  extraReducers: (builder) => {
    // get post or read the data
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.feeds = action.payload;
    });

    // add post in firestore
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.feeds = [action.payload, ...state.feeds];
    });

    // delete post from firebase
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.feeds = state.feeds.filter((post) => post.docId !== action.payload);
    });

    // update post in firebase
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.feeds = state.feeds.map((post) => {
        if (post.docId === action.payload.docId) {
          return action.payload;
        }
        return post;
      });
      state.updatePost = null;
    });
  },
});

export const { setProduct, addPost, updateDocId } = feedSlice.actions;
export default feedSlice.reducer;
