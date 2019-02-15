var list = document.querySelectorAll("input[id='mat-checkbox-4-input']");
Array.prototype.forEach.call(list, function (checkbox) {
  checkbox.checked = true;
});

for(var i=0; i<list.length; i++)
{
    console.log(list[i])
    list[i].styles.display = "none";
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
  
      if (request.greeting == "hello") {
        //      $("#mat-checkbox-4-input").prop('disabled', false);
        var list = document.querySelectorAll("input[id='mat-checkbox-4-input']");
        Array.prototype.forEach.call(list, function (checkbox) {
            checkbox.checked = false;
          });
          for(var i=0; i<list.length; i++)
          {
              console.log(list[i])
              list[i].styles.display = "block";
          }
              

        sendResponse({
          farewell: "goodbye"
        });
      }
    });