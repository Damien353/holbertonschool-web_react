interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // permet d’ajouter d’autres propriétés dynamiques (comme contract)
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // propriété dynamique
};

console.log(teacher3);

// Définition Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface de la fonction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation
console.log(printTeacher("John", "Doe"));
