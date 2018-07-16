function calculate(choice) {

  var num1 = 2, num2 = 3;

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
}
calculate("-");