var s;
Assignment2 = {


  settings: {
    student: [{name :"aniket",age : 21,marks : [70,70,70],}],
  },

  init: function() {
    s = this.settings;
  },


  addstudent : function(name,age,marks) {
    student.push({name:name,age:age,marks:marks});
    return student;
  },

  search : function(name) {
     for(var look in student) {
    if(student[look].name === name) {
      console.log(student[look]);
      return student[look].age;
    }
   }
  },


  percentage : function(name) {
    for(var look in student) {
    if(student[look].name === name) {
      mark = student[look].marks;
        var total = mark.reduce(function(accumulator, currentvalue) {
          return accumulator + currentvalue}, 0);
            return 'Your percentage is ' + total / mark.length + '.';
      }
    }
  },

};


















