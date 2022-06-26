function go() {
    var number = document.getElementById("number").value;
    location.assign(number + ".html");
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    } else return "";
}
if (getCookie("color") != "") {
    document.getElementsById("body").style = "background-color: " + color;
}