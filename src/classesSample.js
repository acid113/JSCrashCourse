// Classes= cleaner way to work with constructor functions and prototypes

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  // no need to use 'prototypes'
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }

  getName() {
    return `Name: ${this.name}`;
  }
}

const newStudent = new Student(1, "nata");
newStudent.addSubject("Tennis");
newStudent.addSubject("Bowling");

console.log(newStudent);
console.log(`${newStudent.id}: ${newStudent["name"]}`);
console.log(newStudent.getName());
