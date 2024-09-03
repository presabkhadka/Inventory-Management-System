import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

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

  return (
    <div className="p-4">
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
            <tr key={row.id} className="border-b-2 last:border-0 even:bg-blue-100">
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
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer hover:bg-blue-500 hover:text-white"
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
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InventoryTable;
