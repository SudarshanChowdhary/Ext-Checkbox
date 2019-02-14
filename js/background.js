alert("hi");
// var checkboxEle = document.getElementsByTagName("mat-checkbox-4")[4];
// var checkboxEle = document.getElementById("mat-checkbox-4-input");

var checkboxEle = document.querySelectorAll("[id='mat-checkbox-4-input']");
// var checkboxEle = document.getElementById("mat-checkbox-4-input");
console.log(checkboxEle);
for(var i=0; i<checkboxEle.length; i++){
  console.log(checkboxEle[i]);
  var disabled = document.createAttribute('disabled');
  checkboxEle[i].setAttributeNode(disabled);
}

[].forEach.call(checkboxEle, function (item) {
  console.log(item);
  // :) hooray `item` can be used here
});

console.log(checkboxEle);
checkboxEle.setAttribute("disabled", true);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
              //  var checkboxEle = document.getElementById("mat-checkbox-4-input");
                console.log(checkboxEle);
//                checkboxEle.setAttribute("disabled", false);
                checkboxEle.removeAttribute("disabled", true);
                var checkboxEle = document.querySelectorAll("[id='mat-checkbox-4-input']");
// var checkboxEle = document.getElementById("mat-checkbox-4-input");

for(var i=0; i<checkboxEle.length; i++){
  console.log(checkboxEle[i]);
  checkboxEle[i].removeAttribute("disabled", true);
}


    if (request.greeting == "hello"){
      sendResponse({farewell: "goodbye"});
    }

  });