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
  orderValue: number;
  quantity: number;
  orderID: number;
  expectedDelivery: Date;
  status: String;
};

const tableData: Items[] = [
  {
    products: "Maggi",
    orderValue: 430,
    quantity: 43,
    orderID: 12,
    expectedDelivery: new Date("2022-12-11"),
    status: "Delayed",
  },
  {
    products: "Bru",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Confirmed",
  },
  {
    products: "Red Bull",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Returned",
  },
  {
    products: "Bourn Vita",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Out for delivery",
  },
  {
    products: "Horlicks",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Harpic",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Delayed",
  },
  {
    products: "Ariel",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Maggi",
    orderValue: 430,
    quantity: 43,
    orderID: 12,
    expectedDelivery: new Date("2022-12-11"),
    status: "Delayed",
  },
  {
    products: "Bru",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Confirmed",
  },
  {
    products: "Red Bull",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Returned",
  },
  {
    products: "Bru",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Confirmed",
  },
  {
    products: "Red Bull",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Returned",
  },
  {
    products: "Bourn Vita",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Out for delivery",
  },
  {
    products: "Horlicks",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Harpic",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Delayed",
  },
  {
    products: "Ariel",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Bourn Vita",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Out for delivery",
  },
  {
    products: "Horlicks",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Harpic",
    orderValue: 257,
    quantity: 22,
    orderID: 12,
    expectedDelivery: new Date("2022-12-21"),
    status: "Delayed",
  },
  {
    products: "Ariel",
    orderValue: 405,
    quantity: 36,
    orderID: 9,
    expectedDelivery: new Date("2022-12-5"),
    status: "Confirmed",
  },
  {
    products: "Maggi",
    orderValue: 430,
    quantity: 43,
    orderID: 12,
    expectedDelivery: new Date("2022-12-11"),
    status: "Delayed",
  },
];

const columnHelper = createColumnHelper<Items>();
const columns = [
  columnHelper.accessor("products", {
    header: () => <span>Products</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("orderValue", {
    header: () => <span>Buying Price</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("quantity", {
    header: () => <span>Quantity</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("orderID", {
    header: () => <span>Threshold Value</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("expectedDelivery", {
    header: () => <span>Expiry Date</span>,
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor("status", {
    header: () => <span>Availability</span>,
    cell: (info) => info.getValue(),
  }),
];

function OrderTable() {
  const [data, _setData] = React.useState(() => [...tableData]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(7);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state:{
      pagination:{
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (pagination) =>{
      setPageIndex(pagination.pageIndex);
      setPageSize(pagination.setPageSize);
    },
  });

  return (
    <div className="p-4">
      <table className="w-full border-2 rounded-lg">
        <thead className="border-b-2 text-left bg-blue-500 text-white">
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
                <td key={cell.id} className="px-4 py-3">
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
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer"
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
          className="px-4 py-2 gap-2 rounded-sm border hover:cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderTable;
