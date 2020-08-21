function display() {

  var x = document.getElementById("form");
  var i;
  var text = [];
  for (i = 0; i < x.length; i++) {
    text[i] = x.elements[i].value;
    console.log(text[i]);

  }
  if (document.querySelector(".alert")) {

  } else if (text[0] && text[1]) {
    var d = document.createElement("div");
    d.classList.add("alert");
    var b = document.createElement("button");
    b.classList.add("close");
    var p = document.createElement("p");
    d.appendChild(p);
    d.appendChild(b);
    p.innerHTML = "My name is " + text[0] + " and I study in " + text[1];
    b.innerHTML = "×";
    console.log(d);
    document.querySelector(".flex").appendChild(d);

    document.querySelector(".close").addEventListener("click", function() {
      document.querySelector(".flex").removeChild(d);
      document.getElementById("form").reset();
      document.getElementById("school").setAttribute("value", "");
    });


  }
}

document.querySelector("#school").addEventListener("keydown", function() {

  document.getElementById("school").setAttribute("value", "school");
});
