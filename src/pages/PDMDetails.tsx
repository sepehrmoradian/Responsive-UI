import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const data: PartsListDef[] = [
  {
    partnumber: "90987729",
    partversion: "testbom",
    partname: "1.0",
    partype: "BB",
    partdescription: "GEely",
    partvalidaty: "CAD000_v123",
    stcConection: "Kayshan",
    designOwner: "VolvoCars",
    stcStatus: "Connected",
    pdmmroom: "MIG_VC_Geely",
  },
  {
    partnumber: "90987729",
    partversion: "testbom",
    partname: "1.0",
    partype: "BB",
    partdescription: "GEely",
    partvalidaty: "CAD000_v123",
    stcConection: "Kayshan",
    designOwner: "VolvoCars",
    stcStatus: "Connected",
    pdmmroom: "MIG_VC_Polestar,MIG_Polestar_VC",
  },
  {
    partnumber: "90987729",
    partversion: "testbom",
    partname: "1.0",
    partype: "BB",
    partdescription: "GEely",
    partvalidaty: "CAD000_v123",
    stcConection: "Kayshan",
    designOwner: "VolvoCars",
    stcStatus: "Connected",
    pdmmroom: "PDM019",
  },
  {
    partnumber: "90987729",
    partversion: "testbom",
    partname: "1.0",
    partype: "BB",
    partdescription: "GEely",
    partvalidaty: "CAD000_v123",
    stcConection: "Kayshan",
    designOwner: "VolvoCars",
    stcStatus: "Connected",
    pdmmroom: "MIG_VC_Geely",
  },
  {
    partnumber: "90987729",
    partversion: "testbom",
    partname: "1.0",
    partype: "BB",
    partdescription: "GEely",
    partvalidaty: "CAD000_v123",
    stcConection: "Kayshan",
    designOwner: "VolvoCars",
    stcStatus: "Connected",
    pdmmroom: "MIG_VC_Polestar,MIG_Polestar_VC",
  },
  {
    partnumber: "909873",
    partversion: "testbom",
    partname: "1.0",
    partype: "BD",
    partdescription: "GEely",
    partvalidaty: "CAD000_v32",
    stcConection: "2342343",
    designOwner: "VolvoCars",
    stcStatus: "UnConnected",
    pdmmroom: "PDM019",
  },
];

interface PartsListDef {
  partnumber: string;
  partversion: string;
  partname: string;
  partype: string;
  partdescription: string;
  partvalidaty: string;
  stcConection: string;
  designOwner: string;
  stcStatus: string;
  pdmmroom: string;
}

const PDMDetails = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/pdm-rooms");
  };
  // Extract the id parameter from the URL
  const { id } = useParams();
  // Find the relevant info using id parameter
  const filteredData = data.filter((part) => part.pdmmroom === id);
  //Column Def
  const columns = useMemo<MRT_ColumnDef<PartsListDef>[]>(
    () => [
      {
        accessorKey: "partnumber",
        header: "Part Number",
        size: 100,
      },
      {
        accessorKey: "partversion",
        header: "Part Version",
        size: 100,
      },
      {
        accessorKey: "partname",
        header: "Part Name",
        size: 100,
      },
      {
        accessorKey: "partype",
        header: "Part Type",
        size: 100,
      },
      {
        accessorKey: "partdescription",
        header: "Part Description",
        size: 100,
      },
      {
        accessorKey: "partvalidaty",
        header: "Part Validity",
        size: 100,
      },
      {
        accessorKey: "stcConection",
        header: "Stc Connection",
        size: 100,
      },
      {
        accessorKey: "designOwner",
        header: "Design Owner",
        size: 100,
      },
      {
        accessorKey: "stcStatus",
        header: "Stc Status",
        size: 100,
        //custom conditional format and styling
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<string>() === "Connected"
                  ? theme.palette.success.dark
                  : theme.palette.error.dark,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue<number>()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <div role="presentation" style={{ marginTop: "2em" }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginLeft: "2em", marginBottom: "2em" }}
      >
        <span
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          PDMRoom
        </span>
        <Typography color="text.primary">{id} - Parts List</Typography>
      </Breadcrumbs>
      <MaterialReactTable
        columns={columns}
        data={filteredData}
        initialState={{ showColumnFilters: true }}
      />
    </div>
  );
};

export default PDMDetails;
