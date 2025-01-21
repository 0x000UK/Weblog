import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div className="h-full lg:flex ">
        <SideBar />
        <div className="flex-auto">
            <Outlet/>
        </div>
    </div>
  );
}