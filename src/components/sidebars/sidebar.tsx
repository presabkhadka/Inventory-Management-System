import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegChartBar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaRegListAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { UnorderedLists } from "../styledcomponent";

function SideBar() {

  const options1 = [
    {name: "Dashboard", icon: <CiHome />, url:"/"},
    {name: "Inventory", icon: <CiShoppingCart />, url:"/inventory"},
    {name: "Reports", icon: <FaRegChartBar />, url:"/reports"},
    {name: "Suppliers", icon: <FaRegUserCircle />, url:"/suppliers"},
    {name: "Orders", icon: <LuBox />, url:"/orders"},
    {name: "Manage Store", icon: <FaRegListAlt />, url:"/manage"},
  ]
  
  const options2 = [
    {name: "Settings", icon: <CiSettings />, url:"/settings"}, //esko page banna baki cha
    {name: "Sign Out", icon: <PiSignOutLight />, url:"/login"},
  ]


  return (
    <div className="flex flex-col justify-between p-4 h-screen">
      <div className="flex flex-col content-between gap-8">
        <div className="logo h-10 w-full ">
          <Link to="/">
            <img
              src="../src/assets/logo.png"
              alt="image"
              className="object-contain h-full "
            />
          </Link>
        </div>
        <div className="options pt-2 pb-4 pl-2 pr-4">
          <UnorderedLists className="flex flex-col gap-3 text-coolgray-600">
            {options1.map((x)=>(
              <NavLink
              to={x.url}
              key={x.name}
              className={({ isActive }) =>
                `flex p-2 items-center gap-4  cursor-pointer hover:outline-none hover:ring-1 hover:bg-blue-100 hover:ring-violet-300 ${
                  isActive ? "text-blue-500" : "text-coolgray-600"
                }`
              }
            >
              {x.icon}
              {x.name}
            </NavLink>
            ))}
          </UnorderedLists>
        </div>
      </div>
      <div className="bottom">
        <div className="authorization flex gap-3 pl-2 pr-4 font-medium text-base text-greyText">
          <UnorderedLists className="w-full flex flex-col gap-3">
            {options2.map((x)=>(
              <NavLink
              to={x.url}
              key={x.name}
              className={({ isActive }) =>
                `flex p-2 items-center gap-4 hover:outline-none hover:ring-1 hover:bg-blue-100 hover:ring-violet-300 cursor-pointer ${
                  isActive ? "text-blue-500" : "text-coolgray-600"
                }`
              }
            >
              {x.icon}
              {x.name}
            </NavLink>
            ))}
          </UnorderedLists>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
