// $(document).ready(function () {
//   alert("background");
//   $("#mat-checkbox-4-input").prop('disabled', true);
// })

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

function modifyDOM1() {
  var keywords = [];
  console.log("hello modifydom1");
  var checkboxEle = document.getElementById("mat-checkbox-4-input");
  console.log(checkboxEle);
  checkboxEle.setAttribute("disabled", true);
  return keywords;
}

function modifyDOM() {
  var keywords = [];
  console.log("hello modifydom1");
  var checkboxEle = document.getElementById("mat-checkbox-4-input");
  console.log(checkboxEle);
  checkboxEle.removeAttribute("disabled", true);
  return keywords;
}
chrome.tabs.executeScript({
  code: '(' + modifyDOM1 + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
  //Here we have just the innerHTML and not DOM structure
});


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");

    if (request.greeting == "hello") {
      //      $("#mat-checkbox-4-input").prop('disabled', false);

      chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
      }, (results) => {
        //Here we have just the innerHTML and not DOM structure
      });

      sendResponse({
        farewell: "goodbye"
      });
    }
  });