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

 $scope.submitForm = function(drcForm){
   console.log($scope.drc);
    if(drcForm.$valid){
  $http({
    method: 'POST',
    url: "../source/TripDecisionFlowchart.json"
  }).then(function (resp) {
    console.log("Success", resp);
  }, function (err) {});

    }

 }
 $scope.showNoMajaorNoStandard = false;

 $scope.showNoMajaorNoStandard = function(){
   //alert("hi");
   console.log("hello")
  if($scope.drc.noMajor || $scope.drc.noStandard){
    $scope.showNoMajaorNoStandard = true;
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
  var keywords=[];
//  console.log(document.body);
  var checkboxEle = document.getElementById("mat-checkbox-4-input");
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

