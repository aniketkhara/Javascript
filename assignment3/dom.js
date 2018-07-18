
  var x = document.getElementById("button");
  x.addEventListener("click",changebackground);
  x.addEventListener("click",changerowcolor);


  function changebackground(){
    var background = document.getElementById("switchboard").style.backgroundColor;

    if (background == "red" ) {
      document.getElementById("switchboard").style.background = "RGB(128, 128, 128)";
      document.getElementById("id01").innerHTML = ( "Status:ON" );
      document.getElementById("id02").innerHTML = "Hello!";

      setTimeout(function(){
             document.getElementById('id02').style.display = "none";
             },5000);
    }
    else {
      document.getElementById("switchboard").style.background = "red";
      document.getElementById("id01").innerHTML=("Status:OFF");
      document.getElementById("id02").innerHTML= ( " " );
      }
     }



    function statecheck(layer, checkbox) {
    var myLayer = document.getElementById("button");
    if(checkbox.checked == true){
        myLayer.style.backgroundColor = "#bff0a1";
        }
    else {
        myLayer.style.backgroundColor = "#FFFF00";
    };
    }



  function changerowcolor(){
    var rowodd = document.getElementById("row1").style.backgroundColor;
    var roweven = document.getElementById("row2").style.backgroundColor;

    if(rowodd == "grey" && roweven == "black"){
      document.getElementById("row1").style.background = "black";
      document.getElementById("row2").style.background = "grey";
      document.getElementById("row3").style.background = "black";
      document.getElementById("row4").style.background = "grey";
    }
    else{
      document.getElementById("row1").style.background = "grey";
      document.getElementById("row2").style.background = "black";
      document.getElementById("row3").style.background = "grey";
      document.getElementById("row4").style.background = "black";
    }
 }
