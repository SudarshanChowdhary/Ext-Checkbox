
setTimeout(function(){
  $(document).ready(function(){
    console.log("hello");
    $("#mat-checkbox-4-input").prop("disabled", true);
  })
},2000)

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
  
      if (request.greeting == "hello") {
             $("#mat-checkbox-4-input").prop('disabled', false);
       
        sendResponse({
          farewell: "goodbye"
        });
      }
    });