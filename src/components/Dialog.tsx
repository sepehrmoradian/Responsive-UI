import * as React from "react";
import Button from "./Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { validatePerson } from "../utils/validation";

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
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleSave = () => {
    const updatedPerson: Person = {
      ...person,
      firstName,
      lastName,
      age: parseInt(age),
    };

    const validationErrors = validatePerson(updatedPerson); // Use the validation function

    if (Object.keys(validationErrors).length === 0) {
      onSave(updatedPerson);
      onClose();
    } else {
      // If there are errors, display validation messages
      setErrors(validationErrors);
    }
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
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            error={!!errors.age}
            helperText={errors.age}
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
