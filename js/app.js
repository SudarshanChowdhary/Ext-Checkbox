var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function () {
  var gdocs = new GDocs();
  return gdocs;
});

function DocsController($scope, $http, gdocs) {

  console.log("angular controller")
  $scope.drc = {
    LDAP: "",
    DRC: "",
    major: false,
    standard: false,
    noMajor: false,
    noStandard: false,
    noMajorInput: "",
    noStandardInput: ""
  }

  $scope.submitForm = function (drcForm) {

    if (drcForm.$valid) {
      var queryString = "LDAP=" + $scope.drc.LDAP + "&DRC=" + $scope.drc.DRC + "&major=" + $scope.drc.major + "&standard=" + $scope.drc.standard + "&noMajor=" + $scope.drc.noMajor + "&noStandard=" + $scope.drc.noStandard + "&noMajorInput=" + $scope.drc.noMajorInput + "&noStandardInput=" + $scope.drc.noStandardInput;
      console.log($scope.drc);
      $http({
        method: 'GET',
        dataType: "json",
       //   url: "https://script.google.com/a/google.com/macros/s/AKfycbx6nYBh1TMq-zP0Ux1wiFDZcm1OOcGtcVb9JLQX-ouGB6EJeScZ/exec?" + queryString
     //   url: "https://script.google.com/macros/s/AKfycbzVKBifA3kqqntOrazFlvNKrelZhk0dO1qJcQLxmOb2Qg7GUQ/exec?" + queryString
//        url: "https://script.google.com/a/macros/s/AKfycbx6nYBh1TMq-zP0Ux1wiFDZcm1OOcGtcVb9JLQX-ouGB6EJeScZ/exec?" + queryString
                url: "https://script.google.com/a/google.com/macros/s/AKfycbxKluhDx9PC-iaAfCUd9RCv0kbRxW6NZVNE6J9XQ-2_42Hly8Q/exec?" + queryString
      }).then(function (resp) {
        console.log("Success", resp);
        window.close();
      }, function (err) {});
    }
  }
}

DocsController.$inject = ['$scope', '$http', 'gdocs']; // For code minifiers.

// Init setup and attach event listeners.
document.addEventListener('DOMContentLoaded', function (e) {
  var closeButton = document.querySelector('#close-button');
  closeButton.addEventListener('click', function (e) {
    window.close();
  });
});

function modifyDOM() {
  var keywords = [];
  //  console.log(document.body);
  var checkboxEle = document.getElementById("mat-checkbox-4-input");
  console.log(checkboxEle);
  checkboxEle.setAttribute("disabled", true);
  return keywords;
}

chrome.tabs.executeScript({
  code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
  //Here we have just the innerHTML and not DOM structure
  console.log('Popup script:')
  //   console.log("output: ", results);
});


// // listen to webportal
// chrome.runtime.onMessageExternal.addListener(
//   function(request, sender, sendResponse) {
//     chrome.tabs.create({ url: request.openUrl },function(tab) {
//         chrome.tabs.executeScript(tab.id, { file: "combined.js" });
//     });
// });

// chrome.tabs.getAllInWindow(undefined, function(tabs) {
//   console.log(tabs);
//   for (var i = 0;i<tabs.length; i++) {

//     if (tabs[i].url == "file:///C:/Users/gkoyalk/chrome%20extensions/Ext-checkbox/example.html") {
//       console.log("URL Match found",tabs[i].url);
//       chrome.tabs.update(tabs[i].id, {url:url, selected: true});
//       return;
//     }
//   }
// });


//   chrome.tabs.query("file:///C:/Users/gkoyalk/chrome%20extensions/Ext-Checkbox/example.html", function(tab)
//   {
//     var tabId = tab[0].id;
//       // if no tab found, open a new one
//       if (tab.length == 0) {
//           chrome.tabs.create({ url: "file:///C:/Users/gkoyalk/chrome%20extensions/Ext-Checkbox/example.html" });
//           chrome.tabs.onUpdated.addListener(function (tabId , info) {
//             if (info.status === 'complete') {
//               chrome.tabs.executeScript({
//                 code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
//                 }, (results) => {
//                 //Here we have just the innerHTML and not DOM structure
//                 console.log('Popup script:')
//              //   console.log("output: ", results);
//               });
//             }
//           })
//       }
//       // otherwise, focus on the first one
//       else
//       {
//           chrome.tabs.update(tab[0].id, { active: true });
//           chrome.tabs.onUpdated.addListener(function (tabId , info) {
//             if (info.status === 'complete') {
//               chrome.tabs.executeScript({
//                 code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
//             }, (results) => {
//                 //Here we have just the innerHTML and not DOM structure
//                 console.log('Popup script:')
//              //   console.log("output: ", results);
//               });

//             }
//           })
//       }       
//   });