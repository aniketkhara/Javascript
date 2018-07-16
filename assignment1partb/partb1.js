
var greetObject = {

    message:"welcome to my blog",
    greeting: function(lang){
       console.log("Lang is ", lang)
           return this.message

                  }
  }
greetObject.greeting.call(lang,"eng");



var greetObject = {

    message:"welcome to my blog",
    greeting: function(lang){
       console.log("Lang is ", lang)
           return this.message

                  }
  }
greetObject.greeting.call(lang,["eng"]);




var greetObject = {

    message:"welcome to my blog",
    greeting: function(lang){
       console.log("Lang is ", lang)
           return this.message

                  }
  }
var bound = greetObject.greeting.bind(lang);
bound("eng");

