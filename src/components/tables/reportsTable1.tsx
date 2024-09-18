import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

type Content = {
  product: String;
  productID: number;
  cateogry: String;
  remainingQuantity: String;
  turnOver: String;
  increaseBy: number;
};

const TableData: Content[] = [
  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },
  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },
  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },

  {
    product: "Tomato",
    productID: 23456,
    cateogry: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "17,000",
    increaseBy: parseFloat("2.3%"),
  },
];

const columnHelper = createColumnHelper<Content>();
const columns = [
  columnHelper.accessor("product", {
    header: () => <span>Product</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("productID", {
    header: () => <span>Product ID</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("cateogry", {
    header: () => <span>Category</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("remainingQuantity", {
    header: () => <span>Remaining Quantity</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("turnOver", {
    header: () => <span>Turn Over</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("increaseBy", {
    header: () => <span>Increase By</span>,
    cell: (info) => <span className="text-green-400">{info.getValue()}%</span>,
  }),
];

function ReportsTable1() {
  const [data, _setData] = React.useState(() => [...TableData]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(7);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (pagination) => {
      setPageIndex(pagination.setPageIndex),
        setPageSize(pagination.setPageSize);
    },
  });
  return (
    <div className="">
      <table className="w-full border-2 rounded-lg">
        <thead className="text-left border-b-2 font-medium text-sm leading-5 bg-blue-500 text-white">
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
export default ReportsTable1;
