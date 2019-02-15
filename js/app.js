chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
    var checkboxEle = document.getElementById("mat-checkbox-4-input");
    console.log(checkboxEle);
    checkboxEle.setAttribute("disabled", true);
      sendResponse({farewell: "goodbye"});
  });

var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function () {
  var gdocs = new GDocs();
  return gdocs;
});

function DocsController($scope, $http, gdocs) {

  $scope.drc = {
    url:null,
    timestamp: null,
    LDAP: "",
    DRC: "",
    selectedOptions: {
      major: false,
      standard: false,
      noMajor: false,
      noStandard: false
    },
    MajorInput: "",
    StandardInput: "",
    noMajorInput: "",
    noStandardInput: "",
    checkboxRequired: true
  }

  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    $scope.drc.url = tabs[0].url;
    console.log($scope.drc.url);
  });

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
      var queryString = "LDAP=" + $scope.drc.LDAP +
      "&timestamp=" + new Date() +
      "&url=" + $scope.drc.url +
      "&DRC=" + $scope.drc.DRC + 
      "&major=" + $scope.drc.selectedOptions.major + 
      "&standard=" + $scope.drc.selectedOptions.standard + 
      "&noMajor=" + $scope.drc.selectedOptions.noMajor + 
      "&noStandard=" + $scope.drc.selectedOptions.noStandard + 
      "&MajorInput=" + $scope.drc.MajorInput + 
      "&StandardInput=" + $scope.drc.StandardInput + 
      "&noMajorInput=" + $scope.drc.noMajorInput + 
      "&noStandardInput=" + $scope.drc.noStandardInput;
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


