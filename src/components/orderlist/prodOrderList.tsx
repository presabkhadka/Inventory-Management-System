import { useState } from "react";
import { Link } from "react-router-dom";
import { H4, P, PBold } from "../styledcomponent";

function ProdOrderList() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);
  const [count5, setCount5] = useState<number>(0);

  const calculateTotal = () => {
    return count1 * 250 + count2 * 250 + count3 * 250 + count4 * 250;
  };

  function discount() {
    return count5 * (0.1 * calculateTotal());
  }

  return (
    <>
      <div className="font-semibold text-lg py-4">
        <H4>Order List</H4>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* Product 1 */}
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="flex gap-4 w-3/4">
            <div>
              <img src="../src/assets/prod.png" alt="" />
            </div>
            <div className="flex w-4/5 text-greyText">
              <div className="w-4/5">
                <P className="">Couple Ring (Feather)</P>
                <P className="text-black">Ring</P>
              </div>
              <div className="xl:w-1/5 grid grid-cols-3 place-items-center">
                <button
                  className="col-start-1 col-end-2 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count1 !== 0) {
                      setCount1(count1 - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="flex items-center justify-center text-xs">
                  {count1}
                </p>
                <button
                  className="col-start-3 col-end-4 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    setCount1(count1 + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>{count1 * 250}</div>
        </div>
        <hr />

        {/* Product 2 */}
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="flex gap-4 w-3/4">
            <div>
              <img src="../src/assets/prod.png" alt="" />
            </div>
            <div className="flex w-4/5 text-greyText">
              <div className="w-4/5">
                <P className="">Couple Ring (Feather)</P>
                <P className="text-black">Ring</P>
              </div>
              <div className="xl:w-1/5 grid grid-cols-3 place-items-center">
                <button
                  className="col-start-1 col-end-2 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count2 !== 0) {
                      setCount2(count2 - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="flex items-center justify-center text-xs">
                  {count2}
                </p>
                <button
                  className="col-start-3 col-end-4 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    setCount2(count2 + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>{count2 * 250}</div>
        </div>
        <hr />

        {/* Product 3 */}
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="flex gap-4 w-3/4">
            <div>
              <img src="../src/assets/prod.png" alt="" />
            </div>
            <div className="flex w-4/5 text-greyText">
              <div className="w-4/5">
                <P className="">Couple Ring (Feather)</P>
                <P className="text-black">Ring</P>
              </div>
              <div className="xl:w-1/5 grid grid-cols-3 place-items-center">
                <button
                  className="col-start-1 col-end-2 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count3 !== 0) {
                      setCount3(count3 - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="flex items-center justify-center text-xs">
                  {count3}
                </p>
                <button
                  className="col-start-3 col-end-4 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    setCount3(count3 + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>{count3 * 250}</div>
        </div>
        <hr />

        {/* Product 4 */}
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="flex gap-4 w-3/4">
            <div>
              <img src="../src/assets/prod.png" alt="" />
            </div>
            <div className="flex w-4/5 text-greyText">
              <div className="w-4/5">
                <P className="">Couple Ring (Feather)</P>
                <P className="text-black">Ring</P>
              </div>
              <div className="xl:w-1/5 grid grid-cols-3 place-items-center">
                <button
                  className="col-start-1 col-end-2 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count4 !== 0) {
                      setCount4(count4 - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="flex items-center justify-center text-xs">
                  {count4}
                </p>
                <button
                  className="col-start-3 col-end-4 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    setCount4(count4 + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>{count4 * 250}</div>
        </div>
        <br />
        <hr />

        {/* Discount Section */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="w-9/12 flex gap-4">
              <div>
                <P className="text-greyText">Discount (10%)</P>
              </div>
              <div className="w-3/12 grid grid-cols-3 place-items-center justify-evenly">
                <button
                  className="col-start-1 col-end-2 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count5 !== 0) {
                      setCount5(count5 - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="flex items-center justify-center text-xs">
                  {count5}
                </p>
                <button
                  className="col-start-3 col-end-4 flex justify-center items-center border border-solid border-greyText h-4 w-4 text-xs leading-none"
                  onClick={() => {
                    if (count5 < 10) {
                      setCount5(count5 + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-3/5 flex justify-end font-semibold text-xs">
              {discount()}
            </div>
          </div>
        </div>

        {/* Total and Grand Total */}
        <div className="flex flex-col">
          <div className="flex justify-between border-b-2 pb-2">
            <div className="w-2/5">
              <P className=" text-greyText">Total</P>
            </div>
            <div className="w-3/5 flex justify-end">
              {calculateTotal()}
            </div>
          </div>
          <div className="flex justify-between border-b-2 pt-2">
            <div className="w-2/5">
              <PBold className="font-bold text-black">Grand Total</PBold>
            </div>
            <div className="w-3/5 flex justify-end font-semibold text-black ">
              {calculateTotal() - discount()}
            </div>
          </div>
        </div>
        <Link to="/payment">
          <button className="border rounded-sm w-full px-4 py-3 text-greyText text-sm leading-5 font-medium hover:bg-blue-100 hover:border hover:border-blue-600">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}

export default ProdOrderList;
