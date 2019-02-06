var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function () {
  var gdocs = new GDocs();
  return gdocs;
});

function DocsController($scope, $http, gdocs) {

  console.log("angular controller")
 $scope.drc = {
   drcURL: "",
   major: "",
   standard: "",
   noMajor: false,
   noStandard: false,
   noMajorInput: "",
   noStandardInput: ""
 }
 $scope.showNoMajaorNoStandard = false;

 $scope.showNoMajaorNoStandard = function(){
   console.log("hello")
  if($scope.drc.noMajor || $scope.drc.noStandard){
    $scope.showNoMajaorNoStandard = true;
  }
 } 

  // $http({
  //   method: 'GET',
  //   params: {
  //     'alt': 'media'
  //   },
  //   url: "../source/TripDecisionFlowchart.json"
  // }).then(function (data) {
  //   $scope.keywordDefinitions = data.data;
  // }, function (data, status, headers, config) {});


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
  var keywords=[];
//  console.log(document.body);
  var checkboxEle = document.getElementById("mat-checkbox-3-input");
  checkboxEle.setAttribute("disabled", true);
  return keywords;
}

chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
    //Here we have just the innerHTML and not DOM structure
    console.log('Popup script:')
    console.log("output: ", results);
  });

