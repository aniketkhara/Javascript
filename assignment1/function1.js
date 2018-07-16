(function () {

  var myGrades = [70, 70, 70, 70];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, currentvalue) {
      return accumulator + currentvalue}, 0);

      return 'Your average grade is ' + total / myGrades.length + '.';
  }

console.log(average());

}());
