function animal(name,lifespan) {
  this.name = name;
  this.lifespan=lifespan
}

function dog(name,lifespan){
  animal.call(this,name,lifespan)
}
dog.prototype.display = function (){
  alert("Hey "+this.name+this.lifespan);
}



function man(name,lifespan,address){
  animal.call(this,name,lifespan)
  this.address=address
}
man.prototype.display=function(){
  alert("Hey "+this.name+this.lifespan+this.address);
}


var dog1= new dog('alex',21);
dog1.display()

var man1 = new man('Ram',100,'pune');
man1.display()