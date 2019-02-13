var checkboxEle = document.getElementById("mat-checkbox-4-input");
console.log(checkboxEle);
checkboxEle.setAttribute("disabled", true);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                var checkboxEle = document.getElementById("mat-checkbox-4-input");
                console.log(checkboxEle);
//                checkboxEle.setAttribute("disabled", false);
                checkboxEle.removeAttribute("disabled", true);

    if (request.greeting == "hello"){
      sendResponse({farewell: "goodbye"});
    }

  });