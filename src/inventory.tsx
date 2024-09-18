import InventoryTable from "./components/tables/inventoryTable";
import SideBar from "./components/sidebars/sidebar";
import Navbar from "./components/sidebars/navbar";
import { H4, P, PBold } from "./components/styledcomponent";

const info = [
  {
    id: 1,
    cats: "14",
    cash: null,
    name: "Categories",
    a: "Last 7 days",
  },

  {
    id: 2,
    cats: "868",
    cash: "25000",
    title: "Revenue",
    name: "Total Products",
    a: "Last 7 days",
  },

  {
    id: 3,
    cats: "5",
    cash: "2500",
    title: "Cost",
    name: "Top Selling",
    a: "Last 7 days",
  },

  {
    id: 4,
    cats: "12",
    cash: "2",
    title: "Not in stock",
    name: "Low Stocks",
    a: "Ordered",
  },
];

const colors = [
  "text-blue-500",
  "text-orange-500",
  "text-purple-500",
  "text-red-500",
];

function Inventory() {
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
              <H4 className="text-coolgray-800">Overall Inventory</H4>
              <div className="grid grid-cols-4 gap-4 pt-2">
                {info.map((x, index) => (
                  <div key={x.id} className="p-2 border-e last:border-e-0">
                    <div className="flex flex-col  pr-4 gap-3 font-semibold text-base leading-6">
                      <div className="flex justify-start">
                        <PBold className={colors[index % colors.length]}>
                          {x.name}
                        </PBold>
                      </div>
                      <div className="flex justify-between font-semibold text-base leading-6 text-greyText gap-24">
                        <PBold>{x.cats}</PBold>
                        <PBold>{x.cash}</PBold>
                      </div>
                      <div className="flex justify-between gap-12 font-normal text-sm leading-5 text-greyText">
                        <P>{x.a}</P>
                        <P>{x.title}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 bg-white rounded-lg">
              <InventoryTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
