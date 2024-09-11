import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Items = {
    name: String;
    stock: number;
}

const tableData: Items[] = [
    {name: "Sulur Branch",
    stock: 15,
},
    {name: "Singanallur Branch",
    stock: 19,
},
];

const columnHelper = createColumnHelper<Items>();

const columns = [
    columnHelper.accessor("name",{
        header: ()=> <span>Name</span>,
        cell: (info)=> info.getValue(),
    }),
    columnHelper.accessor("stock", {
        header: ()=> <span>Stock</span>,
        cell: (info)=> info.getValue(),
    })
]

function AddedTable(){
    const [data, _setData] = React.useState(() => [...tableData]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return(
<div>
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
      </div>
    );
}
export default AddedTable;