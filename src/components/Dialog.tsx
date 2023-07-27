import * as React from "react";
import Button from "./Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface BaseDialogProps {
  person: Person;
  open: boolean;
  onSave: (updatedPerson: Person) => void;
  onClose: () => void;
}

const BaseDialog: React.FC<BaseDialogProps> = ({
  person,
  open,
  onSave,
  onClose,
}) => {
  const [firstName, setFirstName] = React.useState(person.firstName);
  const [lastName, setLastName] = React.useState(person.lastName);
  const [age, setAge] = React.useState(person.age.toString());

  const handleSave = () => {
    if (firstName && lastName && age) {
      onSave({
        ...person,
        firstName,
        lastName,
        age: parseInt(age),
      });
    }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Person</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the person's information below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BaseDialog;
