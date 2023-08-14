import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import data from "../data/pdmroom.json";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "PDM ID",
    headerClassName: "super-app-theme--header",
    width: 120,
  },
  {
    field: "title",
    headerClassName: "super-app-theme--header",
    headerName: "TITLE",
    width: 140,
    editable: false,
  },
  {
    field: "version",
    headerClassName: "super-app-theme--header",
    headerName: "VERSION",
    width: 138,
    editable: false,
  },
  {
    field: "status",
    headerClassName: "super-app-theme--header",
    headerName: "STATUS",
    width: 140,
    editable: false,
  },
  {
    field: "partner",
    headerClassName: "super-app-theme--header",
    headerName: "PARTNER",
    width: 140,
    editable: false,
  },
  {
    field: "collaboration",
    headerClassName: "super-app-theme--header",
    headerName: "COLLABORATION",
    width: 190,
    editable: false,
  },
  {
    field: "nextDelivery",
    headerClassName: "super-app-theme--header",
    headerName: "NEXT DELIVERY",
    width: 190,
    editable: false,
  },
  {
    field: "createdby",
    headerClassName: "super-app-theme--header",
    headerName: "CREATED BY",
    width: 190,
    editable: false,
  },
  {
    field: "createdDate",
    headerClassName: "super-app-theme--header",
    headerName: "CREATED DATE",
    width: 190,
    editable: false,
  },
];

export interface RowData {
  id: string;
}

export default function DataGridBase() {
  const navigate = useNavigate();
  const handleRowClick = (params: RowData) => {
    return navigate(`/pdm-rooms/${params.id}`, {
      state: { pdmRoomData: params },
    });
  };
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "rgb(27,54,93)",
          color: "white",
        },
        "& .MuiIconButton-root": {
          color: "white",
        },
        "& .MuiSvgIcon-fontSizeMedium": {
          color: "black",
        },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        onRowClick={(params) => handleRowClick(params.row as RowData)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
