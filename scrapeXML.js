const request = new XMLHttpRequest();

request.open("GET", url);
request.responseType = "text";

request.onload = function () {
  poemDisplay;
};

//not finished
