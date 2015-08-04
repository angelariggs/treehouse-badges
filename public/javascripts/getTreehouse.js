(function() {
  var request = new XMLHttpRequest();
request.onload = function() {
    console.log(this.responseText);
};
request.open("get", "/fetchme.json");
request.send();
})();


var div = document.createElement('div')
document.body.appendChild(div)