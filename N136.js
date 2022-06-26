function go() {
    var number = document.getElementById("number").value;
    location.assign(number + ".html");
}
var color = ""
if (color != "") {
    document.getElementsById("body").style = "color: " + color;
}