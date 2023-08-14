import React, { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import Textbox from "../components/Textbox";
import BaseDialog from "../components/Dialog";
import { validatePerson } from "../utils/validation"; // Import the validation function

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState<Person[]>([]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleAddPerson = () => {
    const newPerson: Person = {
      firstName,
      lastName,
      age: parseInt(age),
    };

    const validationErrors = validatePerson(newPerson); // Use the validation function

    if (Object.keys(validationErrors).length === 0) {
      setPeople([...people, newPerson]);
      setFirstName("");
      setLastName("");
      setAge("");
      setFormErrors({}); // Clear the form errors on successful submission
    } else {
      // If there are errors, display validation messages
      setFormErrors(validationErrors);
    }
  };

  const handleEditClick = (person: Person) => {
    setIsEditing(true);
    setSelectedPerson(person);
  };

  const handleSaveDialog = (updatedPerson: Person) => {
    const validationErrors = validatePerson(updatedPerson); // Use the validation function

    if (Object.keys(validationErrors).length === 0) {
      // Update the person in the people array
      setPeople((prevPeople) =>
        prevPeople.map((person) =>
          person === selectedPerson ? updatedPerson : person
        )
      );
      setIsEditing(false);
      setSelectedPerson(null);
      setFormErrors({}); // Clear the form errors on successful edit
    } else {
      // If there are errors, display validation messages
      setFormErrors(validationErrors);
    }
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setSelectedPerson(null);
    setFormErrors({}); // Clear the form errors when closing the dialog
  };

  return (
    <div style={{ marginTop: "2em" }}>
      <Textbox
        label="First Name"
        value={firstName}
        onChange={setFirstName}
        error={formErrors.firstName} // Use formErrors.firstName for displaying errors
      />
      <Textbox
        label="Last Name"
        value={lastName}
        onChange={setLastName}
        error={formErrors.lastName} // Use formErrors.lastName for displaying errors
      />
      <Textbox
        label="Age"
        value={age}
        onChange={setAge}
        error={formErrors.age} // Use formErrors.age for displaying errors
      />
      <Button onClick={handleAddPerson}>Save</Button>
      <Table people={people} handleEditClick={handleEditClick} />
      {isEditing && selectedPerson && (
        <BaseDialog
          person={selectedPerson}
          open={isEditing}
          onSave={handleSaveDialog}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default Form;
