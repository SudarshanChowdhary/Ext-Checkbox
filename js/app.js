var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function () {
  var gdocs = new GDocs();
  return gdocs;
});

function DocsController($scope, $http, gdocs) {

  $scope.drc = {
    LDAP: "",
    DRC: "",
    selectedOptions: {
      major: false,
      standard: false,
      noMajor: false,
      noStandard: false
    },
    noMajorInput: "",
    noStandardInput: "",
    checkboxRequired: true
  }

  $scope.onCheckBoxSelected = function () {
    for (var key in $scope.drc.selectedOptions) {
      console.log('Key -' + key + ' val- ' + $scope.drc.selectedOptions[key]);
      if ($scope.drc.selectedOptions[key]) {
        $scope.drc.checkboxRequired = false;
      }
    }
  };

  $scope.submitForm = function (drcForm) {
    if (drcForm.$valid) {
      var queryString = "LDAP=" + $scope.drc.LDAP + "&DRC=" + $scope.drc.DRC + "&major=" + $scope.drc.selectedOptions.major + "&standard=" + $scope.drc.selectedOptions.standard + "&noMajor=" + $scope.drc.selectedOptions.noMajor + "&noStandard=" + $scope.drc.selectedOptions.noStandard + "&noMajorInput=" + $scope.drc.noMajorInput + "&noStandardInput=" + $scope.drc.noStandardInput;
      console.log($scope.drc);
      $http({
        method: 'GET',
        dataType: "json",
        url: "https://script.google.com/a/google.com/macros/s/AKfycbxKluhDx9PC-iaAfCUd9RCv0kbRxW6NZVNE6J9XQ-2_42Hly8Q/exec?" + queryString
      }).then(function (resp) {
        console.log("Success", resp);

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
          });
        });

        // chrome.tabs.getAllInWindow(undefined, function (tabs) {
        //   console.log(tabs);
        //   for (var i = 0; i < tabs.length; i++) {
        //     //  https://chauffeur-dashboard.corp.google.com/triage/driving_events
        //     var matchURL = []
        //     matchURL = tabs[i].url.split("/details/")[0];
        //        console.log(matchURL);
        //     if(matchURL == "https://chauffeur-dashboard.corp.google.com/triage/driving_events"){
        //                     // if(matchURL == "https://chauffeur-dashboard.corp.google.com/triage/driving_events/details/3643458747749042781"){
        //     // if (tabs[i].url == "file:///usr/local/google/home/skoyalkar/Desktop/chrome-ext/ext-Checkbox/Ext-Checkbox/example.html") {
              
        //       chrome.tabs.update(tabs[i].id, {
        //         url: tabs[i].url,
        //         selected: true
        //       });
        //       console.log("hello modifydom1");

        //       function modifyDOM1() {
        //         var keywords = [];
        //         console.log("hello modifydom1");
        //         var checkboxEle = document.getElementById("mat-checkbox-4-input");
        //         console.log(checkboxEle);
        //         checkboxEle.setAttribute("disabled", true);
        //         return keywords;
        //       }

        //       chrome.tabs.executeScript({
        //         code: '(' + modifyDOM1 + ')();' //argument here is a string but function.toString() returns function's code
        //       }, (results) => {
        //         //Here we have just the innerHTML and not DOM structure
        //         });
        //       return;
        //     }
        //   }
        // });
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


chrome.tabs.getAllInWindow(undefined, function (tabs) {
  console.log(tabs);

  chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
    //Here we have just the innerHTML and not DOM structure
    console.log('Popup script:')
    //   console.log("output: ", results);
  });
  

});



// // listen to webportal
// chrome.runtime.onMessageExternal.addListener(
//   function(request, sender, sendResponse) {
//     chrome.tabs.create({ url: request.openUrl },function(tab) {
//         chrome.tabs.executeScript(tab.id, { file: "combined.js" });
//     });
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