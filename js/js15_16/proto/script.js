function Human() {
  this.name = 'Anna';
  this.age ='25';
  this.sex = 'female';
  this.height = 165;
  this.weight = 50;
};

var newHuman = new Human();

function Worker(){
  this.workAt = 'Google',
  this.salary = 5000,
  this.working = function (){
    alert('I am working!!!')
  }
};
function Student(){
  this.studyAt = 'University';
  this.scholarship = 500;
  this.looking = function(){
    alert ('I am looking soapopera!!!')
  }
};

Worker.prototype = newHuman;
Student.prototype = newHuman;

var worker1 = new Worker();
var worker2 = new Worker();
var student1 = new Student();
var student2 = new Student();

console.log('worker1', worker1);
console.log('worker2', worker2);
console.log('student1', student1);
console.log('student2', student2);
