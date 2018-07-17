
var student = [{name :"aniket",age : 21,marks : [70,70,70],}];

function input(name,age,marks){
  this.name = name;
  this.age = age;
  this.marks = marks;
}

input.prototype.addstudent = function () {
  student.push({name:this.name,age:this.age,marks:this.marks});
}



input.prototype.search = function () {
  for(var look in student) {
    if(student[look].name === this.name) {
      console.log(student[look]);
      return student[look].age;
    }
  }
}


input.prototype.percentage = function () {
 for(var look in student) {
    if(student[look].name === this.name) {
      mark = student[look].marks;
      var total = mark.reduce(function(accumulator, currentvalue) {
        return accumulator + currentvalue}, 0);
        return 'Your percentage is ' + total / mark.length + '.';
    }
  }
}


var student1 = new input('alex',23,[80,80,80]);
student1.addstudent();
console.log(student);


var search1 = new input('aniket');
search1.search();


var getpercentage = new input('aniket');
getpercentage.percentage();

