import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegChartBar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaRegListAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Lists, UnorderedLists } from "../styledcomponent";

function SideBar() {
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
            <Link to="/">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <CiHome />
                Dashboard
              </Lists>
            </Link>
            <Link to="/inventory">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <CiShoppingCart />
                Inventory
              </Lists>
            </Link>
            <Link to="/reports">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <FaRegChartBar />
                Reports
              </Lists>
            </Link>
            <Link to="/suppliers">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <FaRegUserCircle />
                Suppliers
              </Lists>
            </Link>
            <Link to="/orders">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <LuBox />
                Orders
              </Lists>
            </Link>
            <Link to="/manage">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <FaRegListAlt />
                Manage Store
              </Lists>
            </Link>
          </UnorderedLists>
        </div>
      </div>
      <div className="bottom">
        <div className="authorization flex gap-3 pl-2 pr-4 font-medium text-base text-greyText">
          <ul className="w-full flex flex-col gap-3">
            <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
              <CiSettings />
              Settings
            </Lists>
            <Link to="/login">
              <Lists className="flex p-2 items-center gap-4 hover:outline-none hover:ring-2 hover:ring-violet-300 cursor-pointer">
                <PiSignOutLight />
                Sign Out
              </Lists>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
