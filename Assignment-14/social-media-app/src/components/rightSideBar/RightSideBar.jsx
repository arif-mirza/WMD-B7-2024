// local imports
import { useState, useContext } from "react";
import waterslide from "../../assets/images/waterslide.jpg";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import remove from "../../assets/images/delete.png";
import { AuthContext } from "../../AppContext/AppContext";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  arrayRemove,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

const RightSideBar = () => {
  const [input, setInput] = useState("");
  const { user , userData } = useContext(AuthContext);
  const friendList = userData?.friends;
  // search frined
  const searchFriends = (data) => {
    return data.filter((item) =>
      item["name"].toLowerCase().includes(input.toLowerCase())
    );
  };

// remove friends
  const removeFriend = async (id, name, image) => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const getDoc = await getDocs(q);
    const userDocumentId = getDoc.docs[0].id;

    await updateDoc(doc(db, "users", userDocumentId), {
      friends: arrayRemove({ id: id, name: name, image: image }),
    });
  }
  return (
    <>
      <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl overflow-auto px-3">
        <div className="flex flex-col items-centers relative pt-10">
          <img className="h-48 rounded-md" src={waterslide} alt="" />
        </div>
        <p className="font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
          Through photography, the beauty of Mother Nature can be frozen in
          time. This category celebrates the magic of our planet and beyond —
          from the immensity of the great outdoors, to miraculous moments in
          your own backyard.
        </p>
        <div className="mx-2 mt-10">
          <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {" "}
            Friends:{" "}
          </p>
        </div>

        {/* input for search frineds */}
        <input
          className="border-0 outline-none mt-4"
          name="input"
          value={input}
          type="text"
          placeholder="Search friends"
          onChange={(e) => setInput(e.target.value)}
        />
        {/* friends list logic */}
        {friendList?.length > 0 ? (
          searchFriends(friendList)?.map((friend) => {
            return (
              <div
                className="flex items-center justify-between hover:bg-gray-100 duration-300 ease-in-out"
                key={friend.id}
              >
                <Link to={`/profile/${friend.id}`}>
                  <div className="flex items-center my-2 cursor-pointer">
                    <div className="flex items-center">
                      <Avatar
                        size="sm"
                        variant="circular"
                        src={friend?.image || avatar}
                        alt="avatar"
                      ></Avatar>
                      <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                        {friend.name}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mr-4">
                  <img
                    onClick={() =>
                      removeFriend(friend.id, friend.name, friend.image)
                    }
                    className="cursor-pointer"
                    src={remove}
                    alt="deleteFriend"
                  ></img>
                </div>
              </div>
            );
          })
        ) : (
          <p className="mt-10 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            Add friends to check their profile
          </p>
        )}
      </div>
      
    </>
  );
};

export default RightSideBar;
