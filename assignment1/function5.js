(function () {

  var array = [70, 70, 70, 70, 50, 60];

  var average = function() {
    var total = array.reduce(function(accumulator, currentvalue) {
      return accumulator + currentvalue}, 0);

      return 'Your average  is ' + total / array.length + '.';
  }

console.log(average());

}());