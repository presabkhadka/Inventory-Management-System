import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Content = {
  category: String;
  turnOver: String;
  increaseBy: number;
};

const TableData: Content[] = [
  {
    category: "Vegetable",
    turnOver: "26,000",
    increaseBy: 3.2,
  },

  {
    category: "Instant Food",
    turnOver: "22,00",
    increaseBy: 2,
  },

  {
    category: "Households",
    turnOver: "22,00",
    increaseBy: 1.5,
  },
];

const columnHelper = createColumnHelper<Content>();
const columns = [
  columnHelper.accessor("category", {
    header: () => <span>Category</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("turnOver", {
    header: () => <span>Turn Over</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("increaseBy", {
    header: () => <span>Increase By</span>,
    cell: (info) =><span className="text-green-400">{info.getValue()}%</span>,
  }),
];

function ReportsTable() {
  const [data, _setData] = React.useState(() => [...TableData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="">
      <table className="w-full rounded-lg">
        <thead className="text-left border-b-2 text-white font-medium text-sm leading-5 bg-blue-500">
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
    </div>
  );
}
export default ReportsTable;
