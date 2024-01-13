"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, Edit2Icon, Eye } from "lucide-react";
import moment from "moment";
import { blogColumns } from "./data";

export default function BlogTable({ data }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  const renderCell = React.useCallback((data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case "title":
        return <span>{data.title}</span>;
      case "category":
        return <span className=" capitalize">{data.category}</span>;
      case "updatedAt":
        return <span>{moment(data.updatedAt).format("MMMM Do YYYY")}</span>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Eye size={24} />
              </span>
            </Tooltip>
            <Tooltip content="Edit data">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Edit2Icon size={24} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete data">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon size={24} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells"
    bottomContent={
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    }
    >
      <TableHeader columns={blogColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
