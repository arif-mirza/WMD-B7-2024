// imports
import LeftSideBar from "../../components/leftSideBar/LeftSideBar"
import CardSection from "../../components/mainSection/CardSection"
import Main from "../../components/mainSection/Main"
import Navbar from "../../components/navbar/Navbar"
import RightSideBar from "../../components/rightSideBar/RightSideBar"

function Home() {
  return (
    <>
    <div className="w-full">
      <div className="fixed top-0 z-10 w-full bg-white">

    <Navbar />
      </div>
      <div className="flex bg-gray-100">
        <div className="flex-auto w-[20%] fixed top-12">
          <LeftSideBar />
        </div>
        <div className="flex-auto w-[60%] absolute left-[20%] top-14 bg-gray-100 rounded-xl">
          <div className="w-[80%] mx-auto">
            <CardSection></CardSection>
            <Main></Main>
            
          </div>
        </div>
        <div className="flex-auto w-[20%] fixed right-0 top-12">
          <RightSideBar />
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Home
