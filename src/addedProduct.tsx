import Navbar from "./components/sidebars/navbar";
import SideBar from "./components/sidebars/sidebar";
import { CiEdit } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tab/tab";
import AddedTable from "./components/tables/addedTable";
import { H4 } from "./components/styledcomponent";

function AddedProduct() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-ashGray overflow-y-scroll">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="p-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 bg-white rounded-lg p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <H4 className="font-medium text-xl leading-7">Maggi</H4>
                <div className="flex gap-4">
                  <button className="flex items-center border rounded gap-2 px-3 py-2 font-medium text-sm leading-5 hover:bg-blue-50">
                    <CiEdit />
                    Edit
                  </button>
                  <button className="flex items-center border rounded gap-2 px-3 py-2 font-medium text-sm leading-5 hover:bg-blue-50">
                    Download
                  </button>
                </div>
              </div>
              <div>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full">
                    <div className="flex border-b-2 gap-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="purchases">Purchases</TabsTrigger>
                      <TabsTrigger value="adjustments">Ajustments</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </div>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="grid grid-cols-12 p-6 gap-y-8">
                      <div className="col-span-9">
                        <div className="flex flex-col gap-y-2">
                          <p className="font-bold text-base leading-6">
                            Primary Details
                          </p>
                          <div className="grid grid-cols-2 pt-2 gap-y-6 text-greyText">
                            <p>Product Name</p>
                            <p className="font-medium text-base leading-6">
                              Maggi
                            </p>
                            <p>Product ID</p>
                            <p className="font-medium text-base leading-6">
                              2345
                            </p>
                            <p>Product catgory</p>
                            <p className="font-medium text-base leading-6">
                              Instant Food
                            </p>
                            <p>Expiry Date</p>
                            <p className="font-medium text-base leading-6">
                              13/4/23
                            </p>
                            <p>Threshold value</p>
                            <p className="font-medium text-base leading-6">
                              12
                            </p>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div className="flex flex-col gap-y-2">
                            <p className="font-bold text-base leading-6">
                              Supplier Details
                            </p>
                            <div className="grid grid-cols-2 pt-2 gap-y-6 text-greyText">
                              <p>Supplier Name</p>
                              <p className="font-medium text-base leading-6">
                                Ronald Martin
                              </p>
                              <p>Contact Number</p>
                              <p className="font-medium text-base leading-6">
                                2123123345
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="flex justify-center">
                          <img
                            src="../src/assets/maggi.svg"
                            alt="maggi_image"
                            className="border-2 border-dashed border-greyText p-2 aspect-square"
                          />
                        </div>
                        <div className="py-10 flex flex-col gap-4 text-greyText">
                          <div className=" flex justify-between">
                            <p>Opening Stock</p>
                            <p className="font-medium text-base leading-6">
                              40
                            </p>
                          </div>
                          <div className=" flex justify-between">
                            <p>Remaining Stock</p>
                            <p className="font-medium text-base leading-6">
                              34
                            </p>
                          </div>
                          <div className=" flex justify-between">
                            <p>On the way</p>
                            <p className="font-medium text-base leading-6">
                              15
                            </p>
                          </div>
                          <div className=" flex justify-between">
                            <p>Threshold value</p>
                            <p className="font-medium text-base leading-6">
                              12
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-8 flex flex-col gap-y-6">
                        <AddedTable/>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default AddedProduct;
