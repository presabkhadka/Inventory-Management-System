import { Badge } from "./components/ui/badge";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import LineChart from "@/components/charts/lineChart";
import { CiCalendar } from "react-icons/ci";
import DashboardTable from "./components/tables/dashboardTable";
import SideBar from "./components/sidebars/sidebar";
import Navbar from "./components/sidebars/navbar";
import { H4, P, PBold } from "./components/styledcomponent";

const lol = [
  {
    id: 1,
    value: "Rs 832",
    emoji: "../src/assets/Sales.png",
    title: "Sales",
  },

  {
    id: 2,
    value: "Rs 832",
    emoji: "../src/assets/Revenue.png",
    title: "Revenue",
  },

  {
    id: 3,
    value: "Rs 832",
    emoji: "../src/assets/Profit.png",
    title: "Profit",
  },

  {
    id: 4,
    value: "Rs 832",
    emoji: "../src/assets/Cost.png",
    title: "Cost",
  },
];

const data1 = [
  {
    id: 1,
    emoji: "../src/assets/Quantity.png",
    value: "999",
    title: "Quality in hands",
  },

  {
    id: 2,
    emoji: "../src/assets/On the way.png",
    value: "200",
    title: "To be recieved",
  },
];

const data3 = [
  {
    id: 1,
    value: "82",
    title: "Purchase",
    emoji: "../src/assets/Purchase.png",
  },

  {
    id: 2,
    value: "Rs 13573",
    title: "Cost",
    emoji: "../src/assets/Cost.png",
  },

  {
    id: 3,
    value: "5",
    title: "Cancel",
    emoji: "../src/assets/Cancel.png",
  },

  {
    id: 4,
    value: "Rs 17432",
    title: "Return",
    emoji: "../src/assets/Profit.png",
  },
];

const data4 = [
  {
    id: 1,
    title: "Number of Suppliers",
    value: 31,
    emoji: "../src/assets/Suppliers.png",
  },

  {
    id: 2,
    title: "Number of Categories",
    value: 21,
    emoji: "../src/assets/Categories.png",
  },
];

const stock = [
  {
    id: 1,
    name: "Tata Salt",
    stock: "10",
    image: "../src/assets/lays.png",
  },

  {
    id: 2,
    name: "Lays",
    stock: "10",
    image: "../src/assets/lays.png",
  },

  {
    id: 3,
    name: "Kurkure",
    stock: "10",
    image: "../src/assets/lays.png",
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 209, mobile: 130 },
  { month: "August", desktop: 214, mobile: 140 },
  { month: "September", desktop: 209, mobile: 130 },
  { month: "October", desktop: 214, mobile: 140 },
  { month: "November", desktop: 209, mobile: 130 },
  { month: "December", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-12 gap-4 h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="md:col-span-10 bg-ashGray overflow-y-scroll">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-12 gap-4 ">
            <div className="col-span-8 bg-white rounded-lg p-4">
              <H4 className="text-coolgray-800">Sales Overview</H4>
              <div className="grid md:grid-cols-4 gap-4 pt-2">
                {lol.map((x) => (
                  <div key={x.id} className="p-2 border-e last:border-e-0">
                    <div className="flex flex-col justify-between  pr-4">
                      <div className="flex justify-center">
                        <img src={x.emoji} alt="sales icon" />
                      </div>
                      <div className="flex justify-between items-center mt-6 gap-3">
                        <PBold className="text-coolgray-700">{x.value}</PBold>
                        <P className="text-coolgray-700">{x.title}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4 bg-white p-4 rounded-lg">
              <H4 className="text-coolgray-800">Inventory Summary</H4>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {data1.map((x) => (
                  <div key={x.id} className="p-2 border-e last:border-e-0">
                    <div className="flex flex-col  pr-4">
                      <div className="flex justify-center">
                        <img src={x.emoji} alt="sales icon" />
                      </div>
                      <div className="flex flex-col mt-6 text-center">
                        <PBold className="text-coolgray-700">{x.value}</PBold>
                        <P className="text-coolgray-700">{x.title}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-8 bg-white rounded-lg p-4">
              <H4 className="text-coolgray-800">Purchase Overview</H4>
              <div className="grid grid-cols-4 gap-4 pt-2">
                {data3.map((x) => (
                  <div key={x.id} className="p-2 border-e last:border-e-0">
                    <div className="flex flex-col justify-between  pr-4">
                      <div className="flex justify-center">
                        <img src={x.emoji} alt="sales icon" />
                      </div>
                      <div className="flex mt-6 justify-between">
                        <PBold className="text-coolgray-700">{x.value}</PBold>
                        <P className="text-coolgray-700">{x.title}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid col-span-4 bg-white rounded-lg p-4">
              <H4 className="text-coolgray-800">Product Summary</H4>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {data4.map((x) => (
                  <div key={x.id} className="pt-2 border-e last:border-e-0">
                    <div className="flex flex-col pr-4">
                      <div className="flex justify-center">
                        <img src={x.emoji} alt="sales icon" />
                      </div>
                      <div className="flex flex-col mt-6 text-center">
                        <PBold className="text-coolgray-700">{x.value}</PBold>
                        <P className="text-coolgray-700">{x.title}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-span-8 col-span-12 bg-white rounded-lg p-4">
              <div className="flex justify-between">
                <H4 className="text-coolgray-800">Sales & Purchase</H4>
                <button className="flex items-center gap-2 border rounded-sm px-4 py-1 text-greyText font-medium text-sm leading-5">
                  <CiCalendar />
                  <P>Weekly</P>
                </button>
              </div>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="xl:col-span-4 col-span-12 bg-white rounded-lg p-6">
              <LineChart />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 py-4">
            <div className="xl:col-span-8 col-span-12 bg-white rounded-lg">
              <div className="flex justify-between items-center  p-4">
                <H4 className="text-coolgray-800">Top Selling Stock</H4>
                <P className="text-blue-600">See All</P>
              </div>
              <div>
                <DashboardTable />
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12 bg-white rounded-lg">
              <div className="flex items-center justify-between p-6">
                <H4 className="text-coolgray-800">Low Quantity Stock</H4>
                <a href="#">
                  <P className="text-blue-600">View More</P>
                </a>
              </div>
              <div className="flex flex-col gap-4 p-2">
                {stock.map((x) => (
                  <div key={x.id} className="flex justify-around items-center">
                    <div>
                      <img src={x.image} alt="lays image" />
                    </div>
                    <div>
                      <PBold>
                        {x.name}
                      </PBold>
                      <P className="text-coolgray-600">
                        Remaining Quantity : {x.stock} packet
                      </P>
                    </div>
                    <div>
                      <Badge variant={"primary"} size={"default"}>
                        Low
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
