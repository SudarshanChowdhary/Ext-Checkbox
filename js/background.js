


chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {

      document.getElementById("mat-checkbox-4-input").setAttribute("disabled", true);      
      chrome.tabs.sendMessage( tabId, {
        message: 'hello!',
        url: changeInfo.url
      })
    }
  }
);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");

    if (request.greeting == "hello") {
      //      $("#mat-checkbox-4-input").prop('disabled', false);

      sendResponse({
        farewell: "goodbye"
      });
    }
  });