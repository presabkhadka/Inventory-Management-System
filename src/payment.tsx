import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import SideBar from "./components/sidebars/sidebar";
import Navbar from "./components/sidebars/navbar";
import PaymentOrderlist from "./components/orderlist/paymentOrderlist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tab/tab";

function Payment() {
  return (
    <div className="grid lg:grid-cols-12 h-screen gap-4">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-ashGray">
        <div>
          <Navbar />
        </div>
        <div className=" flex gap-4 px-6 py-4">
          <button className="flex items-center bg-blue-600 px-4 py-2 rounded-lg gap-4 text-white text-base font-medium shadow-lg ">
            <CiHome size={20} />
            Cash in Hand
          </button>
          <button className="flex items-center bg-white px-4 py-2 rounded-lg gap-4 text-greyText text-base font-medium shadow-lg">
            <CiShoppingCart size={20} />
            Digital Payment
          </button>
        </div>
        <div className="grid grid-cols-10 px-6 gap-x-4">
          <div className="md:col-span-6 rounded-lg bg-white p-6 gap-y-4 shadow-xl">
            <div className="lg:flex gap-4">
              <button className="flex items-center px-4 py-2 gap-4 rounded-md shadow-lg border border-solid border-blue-500 text-blue-500 text-base font-medium">
                <AiFillHome size={20} />
                Inside Valley
              </button>
              <button className="flex items-center px-4 py-2 gap-4 rounded-lg shadow-lg text-base font-medium text-greyText">
                <CiShoppingCart size={20} />
                Outside Valley
              </button>
              <button className="flex items-center px-4 py-2 gap-4 rounded-lg shadow-lg text-base font-medium text-greyText">
                <CiShoppingCart size={20} />
                Shop
              </button>
            </div>
            <div>
              <PaymentOrderlist />
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 rounded-lg bg-white flex flex-col gap-4 shadow-xl p-6 h-full w-full">
            <div className="flex flex-col xl:flex-row xl:gap-4 w-full h-full">
              <Tabs
                defaultValue="esewa"
                className="flex flex-col items-center w-full h-full px-4 py-2 gap-4 rounded-lg text-base font-medium"
              >
                <TabsList className="md:flex xl:flex xl:gap-6 md:w-auto md:gap-2">
                  <TabsTrigger
                    value="esewa"
                    className="flex-1 shadow-lg rounded-lg border"
                  >
                    <button className="flex  items-center w-full h-full gap-4">
                      <AiFillHome size={20} />
                      Esewa
                    </button>
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchant"
                    className="flex-1 shadow-lg rounded-lg border"
                  >
                    <button className="flex  items-center w-full h-full gap-4">
                      <AiFillHome size={20} />
                      Merchant
                    </button>
                  </TabsTrigger>
                  <TabsTrigger
                    value="shop"
                    className="flex-1 shadow-lg rounded-lg border"
                  >
                    <button className="flex  items-center w-full h-full gap-4">
                      <AiFillHome size={20} />
                      Shop
                    </button>
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="esewa"
                  className="flex justify-center items-center w-full h-full"
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src="../src/assets/payment.png"
                      alt="Payment"
                      className=""
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="w-full col-span-10 pt-3">
            <div className="flex justify-end gap-4">
              <button className="px-4 py-1 border rounded border-solid border-greyText text-greyText text-base">
                Cancel
              </button>
              <button className="px-4 py-1 border rounded border-solid border-orange-500 bg-orange-500 text-white text-base">
                <Dialog>
                  <DialogTrigger>Make Booking</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Booking Inside Valley</DialogTitle>
                      <div className="pt-4">
                        <form
                          action="#"
                          className="grid grid-cols-3 gap-4"
                          id="prodForm"
                        >
                          <label htmlFor="prodName">Customer Name</label>
                          <input
                            type="text"
                            name="customername"
                            id="custName"
                            placeholder="Enter customer name"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="prodName">Products</label>
                          <input
                            type="text"
                            name="product"
                            id="prod"
                            placeholder="Enter product"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="prodName">Total</label>
                          <input
                            type="text"
                            name="total"
                            id="total"
                            placeholder="Enter product category"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="prodName">Location</label>
                          <select
                            name="Country"
                            id="country"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          >
                            <option value="np">Kathmandu</option>
                            <option value="in">Bhaktapur</option>
                            <option value="cn">Lalitpur</option>
                            <option value="bd">Outside Valley</option>
                          </select>

                          <label htmlFor="prodName">Payment Status</label>
                          <input
                            type="text"
                            name="status"
                            id="status"
                            placeholder="Not Paid"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="prodName">Contact Number</label>
                          <input
                            type="text"
                            name="contact"
                            id="contact"
                            placeholder="Enter product unit"
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
                              Save for Booking
                            </button>
                          </div>
                        </form>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>

              <button className="px-4  py-1 border rounded border-solid border-blue-500 bg-blue-500 text-white text-base">
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
