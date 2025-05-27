// Déclaration de l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création de deux étudiants
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Merveille',
  age: 22,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Dylan',
  age: 25,
  location: 'Lyon',
};

// Liste des étudiants
const studentsList: Student[] = [student1, student2];

// Création tableau HTML
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '50%';
table.style.margin = '20px auto';
table.style.border = '1px solid black';

// Création de en tête du tableau
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';

[header1, header2].forEach((header) => {
  header.style.border = '1px solid black';
  header.style.padding = '8px';
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

// Ajout des lignes du tableau
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  [firstNameCell, locationCell].forEach((cell) => {
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
    row.appendChild(cell);
  });

  table.appendChild(row);
});

// Ajout du tableau à la page
document.body.appendChild(table);
