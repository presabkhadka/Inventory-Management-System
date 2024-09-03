import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SideBar from "./components/sidebars/sidebar";
import Navbar from "./components/sidebars/navbar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/tab/productTab";
import ProdOrderList from "./components/orderlist/prodOrderList";
import { H5, P, SmallText } from "./components/styledcomponent";

const products = [
  {
    id: 1,
    image: "../src/assets/ring.png",
    price: "Rs. 450",
    name: "Carter Ring",
    productId: "67854",
    stock: "250pcs",
  },
  {
    id: 2,
    image: "../src/assets/ring.png",
    price: "Rs. 450",
    name: "hello",
    productId: "67854",
    stock: "250pcs",
  },
  {
    id: 3,
    image: "../src/assets/ring.png",
    price: "Rs. 450",
    name: "Bracellete",
    productId: "67854",
    stock: "250pcs",
  },
  {
    id: 4,
    image: "../src/assets/ring.png",
    price: "Rs. 450",
    name: "Carter Rsfgbhdfghdfing",
    productId: "67854",
    stock: "250pcs",
  },
  {
    id: 5,
    image: "../src/assets/ring.png",
    price: "Rs. 450",
    name: "Carter Rsfgbhdfghdfing",
    productId: "67854",
    stock: "250pcs",
  },
];

function Product() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-ashGray">
        <div>
          <Navbar />
        </div>
        <div className=" flex gap-4 px-6 py-4">
          <div className="grid grid-cols-12">
            <Tabs defaultValue="ring" className="col-span-12">
              <TabsList>
                <div className="flex gap-4 mb-4">
                  <TabsTrigger value="ring">
                    <button className="flex items-center gap-2">
                      <CiHome size={20} />
                      Ring
                    </button>
                  </TabsTrigger>
                  <TabsTrigger value="bracellete">
                    <button className="flex items-center gap-2">
                      <CiShoppingCart size={20} />
                      Bracellete
                    </button>
                  </TabsTrigger>
                  <TabsTrigger value="ribbon">
                    <button className="flex items-center gap-2">
                      <CiShoppingCart size={20} />
                      Ribbon
                    </button>
                  </TabsTrigger>
                  <TabsTrigger value="lipstick">
                    <button className="flex items-center gap-2">
                      <CiShoppingCart size={20} />
                      Lipstick
                    </button>
                  </TabsTrigger>
                  <TabsTrigger value="mascara">
                    <button className="flex items-center gap-2">
                      <CiShoppingCart size={20} />
                      Mascara
                    </button>
                  </TabsTrigger>
                  <TabsTrigger value="wallet">
                    <button className="flex items-center gap-2">
                      <CiShoppingCart size={20} />
                      Wallet
                    </button>
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="ring">
                <div className="grid grid-cols-12  gap-x-4">
                  <div className="col-span-7 flex">
                    <div className="grid grid-cols-3 gap-6">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-lg flex flex-col gap-4 shadow-lg"
                        >
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img
                              src={product.image}
                              alt="product image"
                              className="w-full object-contain"
                            />
                          </div>
                          <div className="px-4 pb-4 flex flex-col gap-2 leading-6">
                            <H5 className="">
                              {product.price}
                            </H5>
                            <P className="text-greyText ">
                              {product.name}
                            </P>
                            <div className="flex gap-2 items-center">
                              <P className=" text-blue-600">
                                {product.productId}
                              </P>
                              |
                              <SmallText className="font-medium text-xs text-greyText">
                                In stock: {product.stock}
                              </SmallText>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="bg-white shadow-lg p-4 flex flex-col gap-4 rounded-lg">
                      <ProdOrderList />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
