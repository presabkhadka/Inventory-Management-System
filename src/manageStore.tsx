import Navbar from "./components/sidebars/navbar";
import SideBar from "./components/sidebars/sidebar";
import { H4, P, PBold } from "./components/styledcomponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ManageStore() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-ashGray overflow-y-scroll">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="p-6 grid grid-cols-12 gap-4">
          <div className="col-span-full bg-white p-4 flex flex-col gap-6 rounded-lg">
            <div className="flex items-center justify-between">
              <H4 className="">Manage Store</H4>
              <button className="rounded px-4 py-2 bg-blue-600 text-white">
                <Dialog>
                  <DialogTrigger>Add Store</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-8">Add new store</DialogTitle>
                      <div>
                        <form
                          action="#"
                          className="grid grid-cols-3 gap-4 items-center"
                          id="storeForm"
                        >
                          <label htmlFor="prodName">Store Name</label>
                          <input
                            type="text"
                            name="storename"
                            id="storeName"
                            placeholder="Enter store name"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="storeAdd">Store Address</label>
                          <input
                            type="text"
                            name="storeadd"
                            id="storeAdd"
                            placeholder="Enter store address"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="storeOpen">Opening Time</label>
                          <input
                            type="time"
                            name="storeopen"
                            id="storeOpen"
                            placeholder="Enter store opening time"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="storeClose">Closing Time</label>
                          <input
                            type="time"
                            name="storeclose"
                            id="storeClose"
                            placeholder="Enter store closing time"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <label htmlFor="storeContact">Contact Detail</label>
                          <input
                            type="number"
                            name="storecontact"
                            id="storeContact"
                            placeholder="Enter store contact"
                            className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                          />

                          <div className="flex col-span-3 justify-end gap-3 ">
                            <button
                              className="border px-3 py-2 rounded"
                              type="reset"
                            >
                              Discard
                            </button>
                            <button className="border px-3 py-2 rounded bg-blue-600 text-white">
                              Add Store
                            </button>
                          </div>
                        </form>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>
            </div>
            <div className="p-6 grid grid-cols-10 gap-4">
              <div className="rounded-lg border col-span-full flex">
                <div className="col-span-3">
                  <img
                    src="../src/assets/a.png"
                    alt="ring"
                    className="rounded-s-lg"
                  />
                </div>
                <div className="col-span-7 flex justify-between grow p-4">
                  <div className="flex flex-col gap-4">
                    <PBold className="font-semibold text-base leading-5">
                      New Road Store
                    </PBold>
                    <P className="font-normal text-sm leading-5 text-greyText">
                      New Road Street 14, KTM, Nepal
                    </P>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                        Working Hours
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        10:00AM - 07:00PM
                      </PBold>
                    </div>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                        Contact Deatil:
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        9876543212
                      </PBold>
                    </div>
                  </div>
                  <div>
                    <button className="rounded  outline-blue-500 border border-blue-500 px-4 py-2">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border col-span-full flex">
                <div className="col-span-3">
                  <img
                    src="../src/assets/b.png"
                    alt="ring"
                    className="rounded-s-lg"
                  />
                </div>
                <div className="col-span-7 flex justify-between grow p-4">
                  <div className="flex flex-col gap-4">
                    <PBold className="font-semibold text-base leading-5">
                      New Road Store
                    </PBold>
                    <P className="font-normal text-sm leading-5 text-greyText">
                      New Road Street 14, KTM, Nepal
                    </P>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                      Working Hours
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        10:00AM - 07:00PM
                      </PBold>
                    </div>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                        Contact Deatil:
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        9876543212
                      </PBold>
                    </div>
                  </div>
                  <div>
                    <button className="rounded  outline-blue-500 border border-blue-500 px-4 py-2">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border col-span-full flex">
                <div className="col-span-3">
                  <img
                    src="../src/assets/c.png"
                    alt="ring"
                    className="rounded-s-lg"
                  />
                </div>
                <div className="col-span-7 flex justify-between grow p-4">
                  <div className="flex flex-col gap-4">
                    <PBold className="font-semibold text-base leading-5">
                      New Road Store
                    </PBold>
                    <P className="font-normal text-sm leading-5 text-greyText">
                      New Road Street 14, KTM, Nepal
                    </P>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                      Working Hours
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        10:00AM - 07:00PM
                      </PBold>
                    </div>
                    <div className="flex gap-2">
                      <P className="font-normal text-sm leading-5 text-greyText">
                        Contact Deatil:
                      </P>
                      <PBold className="font-semibold text-sm leading-5 ">
                        9876543212
                      </PBold>
                    </div>
                  </div>
                  <div>
                    <button className="rounded  outline-blue-500 border border-blue-500 px-4 py-2">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStore;
