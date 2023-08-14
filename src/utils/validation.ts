interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  const nameRegex = /^[A-Za-z]+$/;
  
  export function validatePerson(person: Person) {
    const errors: { [key: string]: string } = {};
  
    if (!person.firstName.trim()) {
      errors.firstName = "Required";
    } else if (!nameRegex.test(person.firstName)) {
      errors.firstName = "Only alphabetic characters";
    }
  
    if (!person.lastName.trim()) {
      errors.lastName = "Required";
    } else if (!nameRegex.test(person.lastName)) {
      errors.lastName = "Only alphabetic characters";
    }
  
    if (!person.age || isNaN(person.age)) {
      errors.age = "Required";
    } else if (person.age > 99 || person.age < 0) {
        errors.age = "Invalid Age";
    }
  
    return errors;
  }
  