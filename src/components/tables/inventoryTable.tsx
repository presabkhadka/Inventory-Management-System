import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { H4 } from "../styledcomponent";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { IoFilterSharp } from "react-icons/io5";

type Items = {
  products: String;
  buyingPrice: number;
  quantity: number;
  thresholdValue: number;
  expiryDate: Date;
  availability: String;
};

const tableData: Items[] = [
  {
    products: "Maggi",
    buyingPrice: 430,
    quantity: 43,
    thresholdValue: 12,
    expiryDate: new Date("2022-12-11"),
    availability: "In- stock",
  },
  {
    products: "Bru",
    buyingPrice: 257,
    quantity: 22,
    thresholdValue: 12,
    expiryDate: new Date("2022-12-21"),
    availability: "Out of stock",
  },
  {
    products: "Red Bull",
    buyingPrice: 405,
    quantity: 36,
    thresholdValue: 9,
    expiryDate: new Date("2022-12-05"),
    availability: "In- stock",
  },
  {
    products: "Bourn Vita",
    buyingPrice: 257,
    quantity: 22,
    thresholdValue: 12,
    expiryDate: new Date("2022-12-21"),
    availability: "Out of stock",
  },
  {
    products: "Horlicks",
    buyingPrice: 405,
    quantity: 36,
    thresholdValue: 9,
    expiryDate: new Date("2022-12-05"),
    availability: "In- stock",
  },
  {
    products: "Harpic",
    buyingPrice: 257,
    quantity: 22,
    thresholdValue: 12,
    expiryDate: new Date("2022-12-21"),
    availability: "Out of stock",
  },
  {
    products: "Ariel",
    buyingPrice: 405,
    quantity: 36,
    thresholdValue: 9,
    expiryDate: new Date("2022-12-05"),
    availability: "Low stock",
  },
  {
    products: "Colgate",
    buyingPrice: 320,
    quantity: 60,
    thresholdValue: 10,
    expiryDate: new Date("2023-01-15"),
    availability: "In- stock",
  },
  {
    products: "Dove Soap",
    buyingPrice: 150,
    quantity: 80,
    thresholdValue: 20,
    expiryDate: new Date("2023-02-10"),
    availability: "In- stock",
  },
  {
    products: "Surf Excel",
    buyingPrice: 250,
    quantity: 50,
    thresholdValue: 15,
    expiryDate: new Date("2023-03-22"),
    availability: "In- stock",
  },
  {
    products: "Pepsi",
    buyingPrice: 50,
    quantity: 200,
    thresholdValue: 30,
    expiryDate: new Date("2023-01-01"),
    availability: "Out of stock",
  },
  {
    products: "Nestle Milk",
    buyingPrice: 80,
    quantity: 120,
    thresholdValue: 40,
    expiryDate: new Date("2023-01-18"),
    availability: "Low stock",
  },
  {
    products: "Dettol",
    buyingPrice: 90,
    quantity: 90,
    thresholdValue: 25,
    expiryDate: new Date("2023-02-28"),
    availability: "In- stock",
  },
  {
    products: "Lux Soap",
    buyingPrice: 130,
    quantity: 45,
    thresholdValue: 20,
    expiryDate: new Date("2023-03-30"),
    availability: "Out of stock",
  },
  {
    products: "Parachute Oil",
    buyingPrice: 190,
    quantity: 70,
    thresholdValue: 30,
    expiryDate: new Date("2023-02-15"),
    availability: "In- stock",
  },
  {
    products: "Amul Butter",
    buyingPrice: 300,
    quantity: 40,
    thresholdValue: 15,
    expiryDate: new Date("2023-04-05"),
    availability: "In- stock",
  },
  {
    products: "Lifebuoy",
    buyingPrice: 100,
    quantity: 55,
    thresholdValue: 20,
    expiryDate: new Date("2023-03-12"),
    availability: "Out of stock",
  },
];

const columnHelper = createColumnHelper<Items>();

const columns = [
  columnHelper.accessor("products", {
    header: () => <span>Products</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("buyingPrice", {
    header: () => <span>Buying Price</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("quantity", {
    header: () => <span>Quantity</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("thresholdValue", {
    header: () => <span>Threshold Value</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("expiryDate", {
    header: () => <span>Expiry Date</span>,
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor("availability", {
    header: () => <span>Availability</span>,
    cell: (info) => info.getValue(),
  }),
];

function InventoryTable() {
  const [data, _setData] = React.useState(() => [...tableData]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(7);
  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pageSize),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (pagination) => {
      setPageIndex(pagination.pageIndex);
      setPageSize(pagination.pageSize);
    },
  });

  const productImagePicker = React.useRef();

  const sanitizeDataForCSV = (data) => {
    return data.map((inventory) => ({
      products: inventory.products,
      buyingPrice: inventory.buyingPrice,
      quantity: inventory.quantity,
      thresholdValue: inventory.thresholdValue,
      expiryDate: inventory.expiryDate,
      availability: inventory.availability,
    }));
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",") + "\n";
    const rows = data
      .map((inventory) =>
        Object.values(inventory)
          .map((value) => `"${value}"`)
          .join(",")
      )
      .join("\n");

    return headers + rows;
  };

  const downloadCSV = (csvData, fileName) => {
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const sanitizedData = sanitizeDataForCSV(data);
    const csvData = convertToCSV(sanitizedData);
    downloadCSV(csvData, "inventory.csv");
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <H4>Products</H4>
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
                      onClick={() => productImagePicker?.current?.click()}
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
                        <button className="border px-3 py-2 rounded bg-blue-600 text-white">
                          Add Product
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </button>

          <button className="px-4 py-2 gap-2 rounded-sm border flex items-center hover:bg-blue-50">
            <IoFilterSharp />
            Filters
          </button>
          <button
            className="px-4 py-2 gap-2 rounded-sm border flex hover:bg-blue-50"
            onClick={handleDownload}
          >
            Download all
          </button>
        </div>
      </div>
      <table className="w-full border-2 rounded-lg">
        <thead className="text-left border-t-2 border-b-2 bg-blue-500 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b-2 last:border-0 even:bg-blue-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-3 px-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer hover:bg-blue-50"
        >
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          onClick={() =>
            setPageIndex((prev) => Math.min(prev + 1, table.getPageCount() - 1))
          }
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer hover:bg-blue-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InventoryTable;
