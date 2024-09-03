import Navbar from "./components/sidebars/navbar";
import SideBar from "./components/sidebars/sidebar";
import ReportsTable from "./components/tables/reportsTable";
import ReportsCharts from "./components/charts/reportsChart";
import ReportsTable1 from "./components/tables/reportsTable1";
import { H4, P, PBold } from "./components/styledcomponent";

const colors = ["text-black-500", "text-orange-500", "text-purple-500"];

const data = [
  {
    id: 1,
    title: "Total Profit",
    value: "21,190",
  },

  {
    id: 2,
    title: "Revenue",
    value: "18,300",
  },

  {
    id: 3,
    title: "Sales",
    value: "17,432",
  },
];

const data1 = [
  {
    id: 1,
    title: "Net purchase value",
    value: "1,17,432",
  },

  {
    id: 2,
    title: "Net sales value",
    value: "80,432",
  },

  {
    id: 3,
    title: "MoM Profit",
    value: "30,432",
  },

  {
    id: 4,
    title: "YoY Profit",
    value: "1,10,432",
  },
];

function Reports() {
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
            <div className="col-span-7 bg-white rounded-lg p-4">
              <H4 className="">Overview</H4>
              <div className="grid grid-cols-3 border-b-2 py-2">
                {data.map((x, index) => (
                  <div key={x.id} className="p-2">
                    <div className="flex flex-col  pr-4 gap-3 font-semibold text-base leading-6">
                      <div className="flex flex-col gap-4 ">
                        <div>
                          <PBold className="text-coolgray-700">{x.value}</PBold>
                        </div>
                        <div className={colors[index % colors.length]}>
                          <P>{x.title}</P>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 mt-4">
                {data1.map((x) => (
                  <div key={x.id} className="p-2">
                    <div className="flex flex-col gap-3 font-semibold text-base leading-6">
                      <div className="flex flex-col gap-4">
                        <div>
                          <PBold className="text-coolgray-700">{x.value}</PBold>
                        </div>
                        <div>
                          <P className="text-coolgray-700">{x.title}</P>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5 bg-white rounded-lg py-4">
              <div className="flex  justify-between items-center p-4">
                <H4 className="">Best Selling Category</H4>
                <P className=" text-blue-600">See All</P>
              </div>
              <ReportsTable />
            </div>
            <div className="col-span-12 bg-white rounded-lg p-4">
              <ReportsCharts />
            </div>
            <div className="col-span-12 bg-white rounded-lg p-4">
              <div className="flex justify-between">
                <H4>Best selling product</H4>
                <a
                  href="#"
                  className="font-normal text-sm leading-4 text-blue-600"
                >
                  See All
                </a>
              </div>
              <div className="p-4">
                <ReportsTable1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reports;
