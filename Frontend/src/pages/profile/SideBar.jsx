import { Link} from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

import { images } from "../../constants";
import { useEffect, useState } from "react";
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaComments, FaUser } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
import { MdDashboard, MdHome, MdNotifications } from "react-icons/md";
import NavItem from "../../components/NavItem";

const SideBar = () => {
  // const userState = useSelector((state) => state.user);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("profile");
  const windowSize = useWindowSize();

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const closeMenuHandler = () => {
    if (windowSize.width < 1024) {
        setIsMenuActive(false);
    } else {
        setIsMenuActive(true);
    }
  };

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  // const handleCreateNewPost = ({ token }) => {
  //   mutateCreatePost({ token });
  // };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      {/* logo */}
      <Link to="/">
        <img src={images.Logo} alt="logo" className="w-16 lg:hidden" />
      </Link>
      {/* menu burger icon */}
      <div className="cursor-pointer lg:hidden">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {/* sidebar container */}
      {isMenuActive && (
        <div className="fixed inset-0 lg:static lg:h-full lg:w-full">
          {/* underlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          />
          {/* sidebar */}
          <div className="fixed top-0 bottom-0 left-0 z-50 w-1/4 overflow-y-auto bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6">
            <Link to="/">
              <img src={images.Logo} alt="logo" className="w-16" />
            </Link>
            <h4 className="mt-10 font-bold text-[#C7C7C7]">MAIN MENU</h4>
            {/* menu items */}
            <div className="mt-6 flex flex-col gap-y-[0.563rem]">
              <NavItem
                title="Home"
                link="/"
                icon={<MdHome className="text-2xl" />}
                name="home"
              />
              <NavItem
                title="Dashboard"
                link="/u/dashboard"
                icon={<MdDashboard className="text-2xl" />}
                name="dashboard"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
                closeMenu={closeMenuHandler}
              />
              <NavItem
                title="Blogs"
                link="/u/blogs"
                icon={<FaComments className="text-2xl" />}
                name="blogs"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
                closeMenu={closeMenuHandler}
              />

              <NavItem
                title="Notifications"
                link="/u/notifications"
                icon={<MdNotifications className="text-2xl"/>}
                name="notifications"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
                closeMenu={closeMenuHandler}
              />
              <NavItem
                title="Profile"
                link="/u/profile"
                icon={<FaUser className="text-xl" />}
                name="profile"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
                closeMenu={closeMenuHandler}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SideBar;
