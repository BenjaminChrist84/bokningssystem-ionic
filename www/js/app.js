(function(){

// tomt objekt  med alla information som behövs att spara
var myBookningTemp =
{
  inDate: "",
  utDate: "",
  antalVuxna: "",
  antalBarn: "",
  firstName: "",
  lastName: "",
  eMail: "",
  telefon: "",
  fullrum: ""
};

var app = angular.module('starter', ['ionic']);

// En stateProvider för att växla mellan olika view
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home", {                                            // skaffa en stateProvider för att växla till sidan som kallas "Home"
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state("rumlist",{                                            // skaffa en stateProvider för att växla till sidan som kallas "rumlist"
      url: "/rumlist",
      templateUrl: "templates/rumlist.html"
    })
    .state("date", {                                            // skaffa en stateProvider för att växla till sidan som kallas "date"
      url: "/date",
      templateUrl: "templates/date.html"
    })
    .state("rumdetail",{                                            // skaffa en stateProvider för att växla till sidan som kallas "rumdetail"
      url: "/rumdetail/:rID",
      templateUrl: "templates/rumdetail.html"
    })
    .state("info-name",{                                            // skaffa en stateProvider för att växla till sidan som kallas "info-name"
      url: "/info-name",
      templateUrl: "templates/info-name.html"
    })
    .state("confirm",{                                            // skaffa en stateProvider för att växla till sidan som kallas "confirm"
      url: "/confirm",
      templateUrl: "templates/confirm.html"
    })
    .state("klart",{                                            // skaffa en stateProvider för att växla till sidan som kallas "klart"
      url: "/klart",
      templateUrl: "templates/klart.html"
    });
    $urlRouterProvider.otherwise("/home");                    //anropa $urlRouterProviderom något är fel på andra link
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// skapa en controller som hantera "scope", hhtp och state information
app.controller("mainCtrl", function($scope, $http, $state){

  $scope.myNewBookning = myBookningTemp;            // skapa en ny objekt 

  $http.get("js/rum.json").success(function(data){      // hämta information om alla rum från en json fil. 
    $scope.myRum = data;
  });

  $scope.currentDate = new Date();                    // skapa en min date för att användaren kan inte lägga in igår dagens datum

  $scope.copieRum = function(rum){                    // funktion som kopiera rum som den få från $state informationen till objektet som en objekt i en objekt
  $scope.myNewBookning.fullrum = rum;
  };

  $scope.getCleanApp = function(){                     // funktion som ladda om hela appen vilken tömma också alla information som fanns i appen
    document.location.href = "index.html";
  };
});
}());