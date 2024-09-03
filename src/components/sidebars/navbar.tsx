import { CiBellOn, CiUser } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ModeToggle } from "../ui/mode-toggle";


function Navbar() {
  return (
    <div className="p-4 bg-white flex items-center sticky top-0 z-10">
      <div className="flex justify-between w-full pl-8">
        <div className="h-11 w-80">
          <form action="#">
            <div className="relative flex items-center text-gray-500">
              <div className="absolute ml-3">
                <HiMagnifyingGlass size={20} />
              </div>
              <input
                type="text"
                placeholder="Search product, supplier, order"
                className="border rounded  py-2 w-80 border-greyish pl-10 pr-3 "
              />
            </div>
          </form>
        </div>
        <div className="h-11 w-28 flex gap-6 items-center">
          <CiBellOn size={20} />
          <CiUser size={20} />
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
