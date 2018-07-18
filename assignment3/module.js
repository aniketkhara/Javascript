var m;
Assignment3= {

  settings:{
  x : document.getElementById("button"),
  background : document.getElementById("switchboard"),
  myLayer : document.getElementById("button"),
  rowodd : document.getElementById("row1"),
  roweven : document.getElementById("row2"),
  },

  init:function(){
    m=this.settings;
    this.bindUIActions();
  },

  bindUIActions:function(){
     x.m.addEventListener("click",changebackground(){
      Assignment3.changebackground();
     });
     x.m.addEventListener("click",changebackground(){
      Assignment3.changerowcolor();
     });
  },


  changebackground:function(){

    if (m.background == "red" ) {
      m.background.style.backgroundColor = "RGB(128, 128, 128)";
      document.getElementById("id01").innerHTML = ( "Status:ON" );
      document.getElementById("id02").innerHTML = "Hello!";

      setTimeout(function(){
             document.getElementById('id02').style.display = "none";
             },5000);
    }
    else {
      m.background.style.backgroundColor = "red";
      document.getElementById("id01").innerHTML=("Status:OFF");
      document.getElementById("id02").innerHTML= ( " " );
      }
     }



    statecheck:function(layer, checkbox) {

    if(checkbox.checked == true){
        myLayer.style.backgroundColor = "#bff0a1";
        }
    else {
        myLayer.style.backgroundColor = "#FFFF00";
    };
    }



  changerowcolor:function(){


    if(m.rowodd == "grey" && m.roweven == "black"){
      m.rowodd.style.background = "black";
      m.roweven.style.background = "grey";
      document.getElementById("row3").style.backgroundColor = "black";
      document.getElementById("row4").style.backgroundColor = "grey";
    }
    else{
      m.rowodd.style.background = "grey";
      m.roweven.style.background = "black";
      document.getElementById("row3").style.backgroundColor = "grey";
      document.getElementById("row4").style.backgroundColor = "black";
    }
 }

};
Assignment3.init();