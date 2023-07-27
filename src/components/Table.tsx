import tableStyle from "./styles/table.module.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface TableProps {
  people: Person[];
  handleEditClick: (person: Person) => void;
}

const BaseTable: React.FC<TableProps> = ({ people, handleEditClick }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 700 }}
      className={tableStyle.wrapper}
    >
      <Table className={tableStyle.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person, index) => (
            <TableRow key={index}>
              <TableCell>{person.firstName}</TableCell>
              <TableCell>{person.lastName}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell align="center">
                <EditRoundedIcon onClick={() => handleEditClick(person)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
