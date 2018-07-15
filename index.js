var sizep = 10;
function clicked(){
  window.setInterval(function(){


    if( sizep < 100 )
    {
      sizep=sizep+2;
      document.body.childNodes[1].setAttribute("style","font-size:"+sizep+"px;");
    }
    else  {
      sizep=sizep-2;
      document.body.childNodes[1].setAttribute("style","font-size:"+sizep+"px;");

    }
  },500);
  console.log("clicked")

}

function changed(){
  console.log("Event triggered")
  var txt= document.getElementById("textarea")
  console.log(txt.value);
  document.body.childNodes[1].innerHTML =txt.value;
}
