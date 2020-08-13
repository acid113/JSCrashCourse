// NOTE: for better prototyping, see classes sample

// works but you cannot dynamically create it or reuse it
const student1 = {
  id: 1,
  name: "nata",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
};

student1.addSubject("Philo");
student1.addSubject("PE");
// console.log(student1);

// creating constructor functions, DO NOT use arrow functions
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

// use prototypes to add new methods
Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];
};

// possible due to 'prototypical inheritance'
const newStudent = new Student(2, "marvs");
newStudent.addSubject("Archery");
newStudent.addSubject("Ping pong");
console.log(newStudent);
// console.log(Object.getPrototypeOf (newStudent)); // get list of prototypes
