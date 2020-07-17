//Called when version file path loaded
function pathLoaded() {
  //Check if it is a path
  if (request.responseText.startsWith("../")) {
    //Load version file from parent folder(s)
    loadFile(request.responseText + "version.txt", versionLoaded);
  } else {
    //Set version
    versionLoaded();
  }
}

//Called when the version file loaded
function versionLoaded() {
  //Set the version
  document.getElementById("plugin-version").innerText = request.responseText;
}

function loadFile(path, onload) {
  //Create request
  request = new XMLHttpRequest();
  //Add listener
  request.addEventListener("load", onload);
  //Specify the request
  request.open("GET", path);
  //Send the request
  request.send();
}

//Request
var request;
//Load
loadFile("version.txt", pathLoaded);
