var m;
Assignment3 = {
  settings:{
    count:0,
    timer:5000,
    text:document.getElementById('text'),
    msg:document.getElementById('mesg'),
    row:document.getElementsByClassName('row'),
    capture:document.getElementById("capture"),
    switchboard:document.getElementsByClassName("switchboard"),
    button:document.getElementsByClassName("button"),
  },

  init: function() {
    m=this.settings
    this.bindUIActions();
  },

  bindUIActions: function() {
    m.button[0].addEventListener("click", function() {

      if(m.capture.checked==true){
        if(m.count%2==0){
          m.button[0].style.backgroundColor="green"

          m.text.innerHTML="ON";
          Assignment3.displaymessage()
          Assignment3.colorrows()
        }
        else{
          m.button[0].style.backgroundColor="yellow"
          m.text.innerHTML="OFF";
          Assignment3.displaymessage()
          Assignment3.reveseColor()
        }
      }
      else{

        if(m.count%2==0){
          m.switchboard[0].style.backgroundColor="gray"
          text.innerHTML="ON";
          Assignment3.displaymessage()
          Assignment3.colorrows()
        }
        else{
          m.switchboard[0].style.backgroundColor="red"
          text.innerHTML="OFF";
          Assignment3.displaymessage()
          Assignment3.reveseColor()
        }
      }
      m.count++;
    });
  },

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
    m.msg.innerHTML="Hello!"
    setTimeout(function(){
      m.msg.innerHTML="";
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
