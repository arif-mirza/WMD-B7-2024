// imports
import nature from "../../assets/images/nature.jpg";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import job from "../../assets/images/job.png";
import location from "../../assets/images/location.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import laptop from "../../assets/images/laptop.jpg";
import media from "../../assets/images/media.jpg";
import apps from "../../assets/images/apps.jpg";
import tik from "../../assets/images/tik.jpg";
import  { useEffect, useState, useRef , useContext} from "react";
import { AuthContext } from "../../AppContext/AppContext";


const LeftSideBar = () => {
  const [data, setData] = useState([]);
  const count = useRef(0);
  const { user, userData } = useContext(AuthContext);

  const handleRandom = (arr) => {
    setData(arr[Math.floor(Math.random() * arr?.length)]);
  };

  useEffect(() => {
    const imageList = [
      {
        id: "1",
        image: laptop,
      },
      {
        id: "2",
        image: media,
      },
      {
        id: "3",
        image: apps,
      },
      {
        id: "4",
        image: tik,
      },
    ];
    handleRandom(imageList);
    let countAds = 0;
    let startAds = setInterval(() => {
      countAds++;
      handleRandom(imageList);
      count.current = countAds;
      if (countAds === 5) {
        clearInterval(startAds);
      }
    }, 2000);

    return () => {
      clearInterval(startAds);
    };
  }, []);

  // swich for loaders

  const progressBar = () => {
    switch (count.current) {
      case 1:
        return 15;

      case 2:
        return 30;

      case 3:
        return 45;

      case 4:
        return 60;

      case 5:
        return 75;

      default:
        return 0;
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
        <div className="flex flex-col items-center relative">
          <img src={nature} alt="nature" className="h-28 w-full rounded-r-xl" />
          <div className="absolute -bottom-4">
            <Tooltip content="profile" placement="top">
              <Avatar
                src={ user?.photoURL || avatar}
                size="md"
                className="rounded-full w-16 h-16"
              />
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col items-center pt-6">
          <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none my-3">
          {user?.email || userData?.email}
          </p>
          <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">
            Access exclusive tools & insights
          </p>
          <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2">
            Try Premium
          </p>
        </div>

        {/* 1 */}
        <div className="flex flex-col items-start pl-2">
          <div className="flex items-center pb-4">
            <img src={location} alt="location" className="h-10" />
            <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none">
              Califonia
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-start pl-2">
          <div className="flex items-center pb-4">
            <img src={job} alt="job" className="h-10" />
            <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none">
              React Developer
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
            Events
          </p>
          <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
            Groups
          </p>
          <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
            Follow
          </p>
          <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
            More
          </p>
        </div>
        <div className="ml-2">
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-5">
            Social Profiles
          </p>
          {/* 1 */}
          <div className="flex items-center">
            <img className="h-10 mb-3 mr-2" src={facebook} alt="facebook"></img>
            <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
              Social Network
            </p>
          </div>
          {/* 2 */}
          <div className="flex items-center">
            <img className="h-10 mb-3 mr-2" src={twitter} alt="twitteer"></img>
            <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
              Social Network
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-4">
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
            Random Ads
          </p>
          <div
            style={{ width: `${progressBar()}%` }}
            className="bg-blue-600 rounded-xl h-1 mb-4"
          ></div>
          <img className="h-36 rounded-lg" src={data?.image} alt="ads"></img>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
