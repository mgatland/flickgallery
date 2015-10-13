var link = document.createElement("a");
link.style.color = "white";
link.style.textDecoration = "none";
link.style.fontSize = "39px";
link.style.float = "left";
link.style.marginLeft = "10px";
link.href = "index.html";
link.innerHTML = "&#8617;";
document.querySelector("#footer").appendChild(link);

function goBack(evt){    
  evt = evt || window.event;
 if (evt.keyCode===27) { //esc
    window.location = "index.html";
  }
}
document.addEventListener("keydown", goBack);