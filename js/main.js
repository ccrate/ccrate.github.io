var URL = "http://ccpredictor-ccrate.apps.us-east-2.online-starter.openshift.com/contest/"

document.getElementById("predictButton").onclick = function() {
    window.location = URL + document.getElementById("contestCode").value + "/all"
}