import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { H4 } from "../styledcomponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IoFilterSharp } from "react-icons/io5";

type Items = {
  supplierName: String;
  product: String;
  contactNumber: number;
  email: String;
  type: String;
  onTheWay: number;
};

const tableData: Items[] = [
  {
    supplierName: "Maggi",
    product: "KitKat",
    contactNumber: 43,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 13,
  },
  {
    supplierName: "Bru",
    product: "KitKat",
    contactNumber: 22,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 13,
  },
  {
    supplierName: "Red Bull",
    product: "KitKat",
    contactNumber: 36,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 23,
  },
  {
    supplierName: "Bourn Vita",
    product: "KitKat",
    contactNumber: 22,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 2,
  },
  {
    supplierName: "Horlicks",
    product: "KitKat",
    contactNumber: 36,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 9,
  },
  {
    supplierName: "Harpic",
    product: "KitKat",
    contactNumber: 22,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 9,
  },
  {
    supplierName: "Ariel",
    product: "KitKat",
    contactNumber: 36,
    email: "presab@gmail.com",
    type: "Taking Return",
    onTheWay: 2,
  },
  {
    supplierName: "Colgate",
    product: "Toothpaste",
    contactNumber: 55,
    email: "colgate_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 20,
  },
  {
    supplierName: "Nestle",
    product: "Milk",
    contactNumber: 60,
    email: "nestle_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 30,
  },
  {
    supplierName: "Dove",
    product: "Soap",
    contactNumber: 45,
    email: "dove_supplier@gmail.com",
    type: "Taking Return",
    onTheWay: 15,
  },
  {
    supplierName: "Pepsi",
    product: "Soda",
    contactNumber: 35,
    email: "pepsi_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 10,
  },
  {
    supplierName: "Dettol",
    product: "Sanitizer",
    contactNumber: 50,
    email: "dettol_supplier@gmail.com",
    type: "Taking Return",
    onTheWay: 5,
  },
  {
    supplierName: "Lux",
    product: "Soap",
    contactNumber: 40,
    email: "lux_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 8,
  },
  {
    supplierName: "Parachute",
    product: "Hair Oil",
    contactNumber: 30,
    email: "parachute_supplier@gmail.com",
    type: "Taking Return",
    onTheWay: 6,
  },
  {
    supplierName: "Amul",
    product: "Butter",
    contactNumber: 25,
    email: "amul_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 12,
  },
  {
    supplierName: "Lifebuoy",
    product: "Soap",
    contactNumber: 28,
    email: "lifebuoy_supplier@gmail.com",
    type: "Taking Return",
    onTheWay: 7,
  },
  {
    supplierName: "Tata",
    product: "Salt",
    contactNumber: 50,
    email: "tata_supplier@gmail.com",
    type: "Delivery",
    onTheWay: 18,
  },
];

const columnHelper = createColumnHelper<Items>();

const columns = [
  columnHelper.accessor("supplierName", {
    header: () => <span>Supplier Name</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("product", {
    header: () => <span>Product</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("contactNumber", {
    header: () => <span>Contact Number</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: () => <span>Email</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type", {
    header: () => <span>Type</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("onTheWay", {
    header: () => <span>On The Way</span>,
    cell: (info) => info.getValue(),
  }),
];

function SupplierTable() {
  const [data, _setData] = React.useState(() => [...tableData]);
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
      setPageIndex(pagination.pageIndex);
      setPageSize(pagination.setPageSize);
    },
  });

  const productImagePicker = React.useRef();

  const sanitizeDataForCSV = (data) => {
    return data.map((supplier) => ({
      supplierName: supplier.supplierName,
      product: supplier.product,
      contactNumber: supplier.contactNumber,
      email: supplier.email,
      type: supplier.type,
      onTheWay: supplier.onTheWay,
    }));
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",") + "\n";
    const rows = data
      .map((supplier) =>
        Object.values(supplier)
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
    downloadCSV(csvData, "suppliers.csv");
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <H4>Suppliers</H4>
        <div className=" flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 flex gap-2 rounded-sm">
            <Dialog>
              <DialogTrigger>Add Supplier</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Supplier</DialogTitle>
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
                      <label htmlFor="prodName">Supplier Name</label>
                      <input
                        type="text"
                        name="productname"
                        id="prodName"
                        placeholder="Enter supplier name"
                        className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                      />

                      <label htmlFor="prodName">Product</label>
                      <input
                        type="text"
                        name="productid"
                        id="prodID"
                        placeholder="Enter product"
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
                        type="number"
                        name="productname"
                        id="prodName"
                        placeholder="Enter buying price"
                        className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                      />

                      <label htmlFor="prodName">Contact Number</label>
                      <input
                        type="number"
                        name="productname"
                        id="prodName"
                        placeholder="Enter supplier contact number"
                        className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                      />

                      <label htmlFor="prodName">Type</label>
                      <select
                        name="type"
                        id="type"
                        className="border px-3 py-2 flex grow gap-2 rounded-lg col-span-2"
                      >
                        <option value="np">Not taking return</option>
                        <option value="in">Taking return</option>
                      </select>

                      <div className="flex col-span-3 justify-end gap-3 ">
                        <button
                          className="border px-3 py-2 rounded"
                          type="reset"
                        >
                          Discard
                        </button>
                        <button className="border px-3 py-2 rounded bg-blue-600 text-white">
                          Add Supplier
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
          <button className="px-4 py-2 gap-2 rounded-sm border flex hover:bg-blue-50"
          onClick={handleDownload}>
            Download all
          </button>
        </div>
      </div>
      <table className="w-full border-2">
        <thead className="text-left border-b-2 bg-blue-500 text-white">
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

export default SupplierTable;
