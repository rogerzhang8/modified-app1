import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import props from "prop-types";
import axios from 'axios';
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "phoneNumber", headerName: "phoneNumber", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "jobTitle", headerName: "jobTitle", width: 130 },
  {
    field: "edit",
    headerName: "Edit",
    width: 70,
    renderCell: () => <Button variant="text">Edit</Button>
  },
  {
    field: "view",
    headerName: "View",
    width: 70,
    renderCell: () => <Button variant="contained">View</Button>
  },
  {
    field: "listId",
    headerName: "listId",
    type: "number",
    width: 90
  }
];
const rows = axios.get("http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480").data;

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
      />
    </div>
  );
}
