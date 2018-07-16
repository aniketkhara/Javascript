var s;
Assignment2 = {

  settings :{
     myGrades : [70, 70, 70, 70],
     num1 : 2,
     num2 : 3,
     x : 2,
     choice : '+',
     array : [70, 70, 70, 70, 50, 60],
     Greater_array : [70, 70, 70, 70, 50, 60, 100],
     array1 : [1, 2, 3, 4],
     array2 : [5, 6, 7, 8],
     input : [6, 7, 4, 8],

  },

  init: function() {
    s = this.settings;
  },


  Percentage : function (...myGrades) {

    var average = function() {
      var total = myGrades.reduce(function(accumulator, currentvalue) {
        return accumulator + currentvalue}, 0);

        return 'Your average grade is ' + total / myGrades.length + '.';
    }

      console.log(average());

  },



  Table : function (x)
  {

    var tableBody = '';
    for (var i=1; i<10; i++) {
      tableBody += x + "*" + i +"="+x*i + '\n';
    }
    console.log(tableBody);
  },


  Calculator : function (choice,num1,num2) {

  function add() {
    console.log("answer=",num2+num1);
  }

  function sub() {
    console.log("answer=",num2-num1);
  }

  function mult() {
    console.log("answer=",num2*num1);
  }

  function div() {
    console.log("answer=",num2/num1);
  }

  function options(num1,num2){

    switch(choice) {
      case '+':
      add();
      break;

      case '-':
      sub();
      break;

      case '*':
      mult();
      break;

      case '/':
      div();
      break;
    }

   }
    options();
  },


  Average : function (...array) {

  var average = function() {
    var total = array.reduce(function(accumulator, currentvalue) {
      return accumulator + currentvalue}, 0);

      return 'Your average  is ' + total / array.length + '.';
    }

  console.log(average());

  },


  Greatest : function (...Greater_array) {

  console.log(Math.max(...Greater_array));

  },


  Addarrays : function (array1,array2){

  var sum = array1.map(function (num, idx) {
  return num + array2[idx];
  });
  console.log(sum);

  },


  Arrayreverse : function (...input)
  {
  var ans;
  ans = input.reverse();
  console.log(ans);
  },


};