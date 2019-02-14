// // var checkboxEle = document.getElementById("mat-checkbox-4-input");
// // console.log(checkboxEle);
// // checkboxEle.setAttribute("disabled", true);

// var checkboxEle = document.querySelectorAll("[id='mat-checkbox-4-input']");
// // var checkboxEle = document.getElementById("mat-checkbox-4-input");

// for(var i=0; i<checkboxEle.length; i++){
//   console.log(checkboxEle[i]);
//   checkboxEle[i].setAttribute("disabled", true);
// }

$(document).ready(function(){
  alert("background");
  $("#mat-checkbox-4-input").prop('disabled', true);
})



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
//                 var checkboxEle = document.getElementById("mat-checkbox-4-input");
//                 console.log(checkboxEle);
// //                checkboxEle.setAttribute("disabled", false);
//                 checkboxEle.removeAttribute("disabled", true);



alert("background")
    if (request.greeting == "hello"){
      $("#mat-checkbox-4-input").prop('disabled', false);
      sendResponse({farewell: "goodbye"});
    }

  });