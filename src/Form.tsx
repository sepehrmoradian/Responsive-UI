import React, { useState } from "react";
import Button from "./components/Button";
import Table from "./components/Table";
import Textbox from "./components/Textbox";
import BaseDialog from "./components/Dialog";

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

  const handleAddPerson = () => {
    if (firstName && lastName && age) {
      const newPerson: Person = {
        firstName,
        lastName,
        age: parseInt(age),
      };

      setPeople([...people, newPerson]);
      setFirstName("");
      setLastName("");
      setAge("");
    }
  };

  const handleEditClick = (person: Person) => {
    setIsEditing(true);
    setSelectedPerson(person);
  };

  const handleSaveDialog = (updatedPerson: Person) => {
    // Update the person in the people array
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person === selectedPerson ? updatedPerson : person
      )
    );
    setIsEditing(false);
    setSelectedPerson(null);
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setSelectedPerson(null);
  };

  return (
    <div>
      <Textbox label="First Name" value={firstName} onChange={setFirstName} />
      <Textbox label="Last Name" value={lastName} onChange={setLastName} />
      <Textbox label="Age" value={age} onChange={setAge} />
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
