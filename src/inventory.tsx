import { IoFilterSharp } from "react-icons/io5";
import InventoryTable from "./components/tables/inventoryTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { useRef } from "react";
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
  const productImagePicker = useRef();

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
            <div className="col-span-12 bg-white rounded-lg p-4">
              <div className="flex justify-between">
                <H4 className="text-coolgray-800">Products</H4>
                <div className=" flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 flex gap-2 rounded-sm">
                    <Dialog>
                      <DialogTrigger>Add Product</DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>New Product</DialogTitle>
                          <div className="flex justify-center p-4">
                            <input
                              ref={productImagePicker}
                              className="hidden"
                              type="file"
                              name="productImage"
                              id="prodpng"
                              accept="image/png, image/gif, image/jpeg"
                            />
                            <button
                              onClick={() =>
                                productImagePicker?.current?.click()
                              }
                              className="border-dashed border-2 p-6 text-blue-400"
                            >
                              Browse Image
                            </button>
                          </div>
                          <div>
                            <form
                              action="#"
                              className="grid grid-cols-3 gap-4 items-center"
                              id="prodForm"
                            >
                              <label htmlFor="prodName">Product Name</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter product name"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Product ID</label>
                              <input
                                type="text"
                                name="productid"
                                id="prodID"
                                placeholder="Enter product ID"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Category</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter product category"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Buying Price</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter buying price"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Quantity</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter product quantity"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Unit</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter product unit"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Expiry Date</label>
                              <input
                                type="date"
                                name="productname"
                                id="prodName"
                                placeholder="Enter expiry date"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Threshold Value</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter threshold value"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />
                              <div className="flex col-span-3 justify-end gap-3 ">
                                <button
                                  className="border px-3 py-2 rounded"
                                  type="reset"
                                >
                                  Discard
                                </button>
                                <button className="border px-3 py-2 rounded bg-button text-white">
                                  Add Product
                                </button>
                              </div>
                            </form>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>

                  <button className="px-4 py-2 gap-2 rounded-sm border flex items-center">
                    <IoFilterSharp />
                    Filters
                  </button>
                  <button className="px-4 py-2 gap-2 rounded-sm border flex">
                    Download all
                  </button>
                </div>
              </div>
              <div>
                <InventoryTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
