import SupplierTable from "./components/tables/supplierTable";
import SideBar from "./components/sidebars/sidebar";
import Navbar from "./components/sidebars/navbar";

function Suppliers() {
  return (
    <div className="grid grid-cols-12 h-screen gap-4">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-ashGray overflow-y-scroll">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="p-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 bg-white rounded-lg p-4">
              <div>
                <SupplierTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
