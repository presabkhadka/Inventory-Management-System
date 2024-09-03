import { IoFilterSharp } from "react-icons/io5";
import SupplierTable from "./components/tables/supplierTable";
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
import { H4} from "./components/styledcomponent";

function Suppliers() {
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
              <div className="flex justify-between">
                <H4 className="">Suppliers</H4>
                <div className=" flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 flex gap-2 rounded-sm">
                    <Dialog>
                      <DialogTrigger>Add Supplier</DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>New Supplier</DialogTitle>
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
                              <label htmlFor="prodName">Supplier Name</label>
                              <input
                                type="text"
                                name="productname"
                                id="prodName"
                                placeholder="Enter supplier name"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Product</label>
                              <input
                                type="text"
                                name="productid"
                                id="prodID"
                                placeholder="Enter product"
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

                              <label htmlFor="prodName">Contact Number</label>
                              <input
                                type="number"
                                name="productname"
                                id="prodName"
                                placeholder="Enter supplier contact number"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              />

                              <label htmlFor="prodName">Type</label>
                              <select
                                name="type"
                                id="type"
                                className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                              >
                                <option value="np">Not taking return</option>
                                <option value="in">Taking return</option>
                              </select>

                              <div className="flex col-span-3 justify-end gap-3 ">
                                <button
                                  className="border px-3 py-2 rounded"
                                  type="reset"
                                >
                                  Discard
                                </button>
                                <button className="border px-3 py-2 rounded bg-button text-white">
                                  Add Supplier
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
