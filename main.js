


function makeBold() {
  var fw = document.getElementById("myText");
  if( fw.style.fontWeight == "bold" ) {
      fw.style.fontWeight = "normal";
  } else {
      fw.style.fontWeight = "bold";
  }

  }


  function makeItalic() {
    var italic = document.getElementById("myText");
 if (italic.style.fontStyle == "italic") {
  italic.style.fontStyle = "normal";
 } else {
  italic.style.fontStyle = "italic";
 }

  
}


  function makeUnderline() {
    var und = document.getElementById("myText");
    if (und.style.textDecoration =="underline") {
      und.style.textDecoration = "none";
    } else {
      und.style.textDecoration ="underline";
    }
  }


  function ChangePolice() {
    var list = document.getElementById("police");
    var texte= list.options[list.selectedIndex].text;
  document.getElementById("myText").style.fontFamily = texte;
  }


  function ChangeSize() {
  var sel = document.getElementById("size");
  var text= sel.options[sel.selectedIndex].text;
  document.getElementById("myText").style.fontSize = text;

  }