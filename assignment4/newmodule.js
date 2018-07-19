var m;
Assignment3 = {
  settings:{
    count:0,
    timer:5000,
    textual:$("#text"),
    msg:$("#mesg"),
    row:$(".row"),
    capture:$("#capture"),
    switchboard:$(".switchboard"),
    button:$(".button"),
  },

  init: function() {
    m=this.settings
    this.bindUIActions();
  },

  bindUIActions: function() {
    $(document).ready(function(){
    m.button.on("click", function() {

      if(m.capture.checked==true){
        if(m.count%2==0){
          m.button.css("background-color","green");
          m.textual.text("ON");
          Assignment3.displaymessage()
          Assignment3.colorrows()
        }
        else{
          m.button.css("background-color","yellow");
          m.textual.text("OFF");
          Assignment3.displaymessage()
          Assignment3.reveseColor()
        }
      }
      else{
        if(m.count%2==0){
          m.switchboard.css("background-color", "gray");
          m.textual.text("ON");
          Assignment3.displaymessage()
          Assignment3.colorrows()
        }
        else{
          m.switchboard.css("background-color", "red");
          m.textual.text("OFF");
          Assignment3.displaymessage()
          Assignment3.reveseColor()
        }
      }
      m.count++;
    });
  }
  )},


  colorrows:function(){
    for(var i=0;i<4;i++){
      if(i%2==0){
        m.row[i].style.backgroundColor="gray";
      }
      else{
        m.row[i].style.backgroundColor="black";
      }
    }
  },

  displaymessage:function(){
    m.msg.text("Hello!");
    setTimeout(function(){
      m.msg.text("");
    },m.timer)
  },

  reveseColor:function(){
    for(var i=0;i<4;i++){
      if(i%2!=0){
        m.row[i].style.backgroundColor="gray";
      }
      else{
        m.row[i].style.backgroundColor="black";
      }
    }
  }
 };
Assignment3.init();
