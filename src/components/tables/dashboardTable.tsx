import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

type Items = {
  name: String;
  soldQuantity: number;
  remainingQuantity: number;
  price: number;
};

const tableData: Items[] = [
  {
    name: "Surf Excel",
    soldQuantity: 30,
    remainingQuantity: 12,
    price: 100,
  },
  {
    name: "Rin",
    soldQuantity: 21,
    remainingQuantity: 15,
    price: 207,
  },
  {
    name: "Parle G",
    soldQuantity: 19,
    remainingQuantity: 17,
    price: 105,
  },
  {
    name: "Surf Excel",
    soldQuantity: 30,
    remainingQuantity: 12,
    price: 100,
  },
  {
    name: "Rin",
    soldQuantity: 21,
    remainingQuantity: 15,
    price: 207,
  },
  {
    name: "Parle G",
    soldQuantity: 19,
    remainingQuantity: 17,
    price: 105,
  },
  {
    name: "Surf Excel",
    soldQuantity: 30,
    remainingQuantity: 12,
    price: 100,
  },
  {
    name: "Rin",
    soldQuantity: 21,
    remainingQuantity: 15,
    price: 207,
  },
  {
    name: "Parle G",
    soldQuantity: 19,
    remainingQuantity: 17,
    price: 105,
  },
];

const columnHelper = createColumnHelper<Items>();

const columns = [
  columnHelper.accessor("name", {
    header: () => <span>Name</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("soldQuantity", {
    header: () => <span>Sold Quantity</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("remainingQuantity", {
    header: () => <span>Remaining Quantity</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: () => <span>Price</span>,
    cell: (info) => info.getValue(),
  }),
];

function DashboardTable() {
  const [data, _setData] = React.useState(() => [...tableData]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);
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

export default DashboardTable;
