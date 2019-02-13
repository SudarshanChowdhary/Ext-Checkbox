var checkboxEle = document.getElementById("mat-checkbox-4-input");
console.log(checkboxEle);
checkboxEle.setAttribute("disabled", true);

alert("background")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){
      checkboxEle.setAttribute("disabled", false);
      sendResponse({farewell: "goodbye"});
    }

  });