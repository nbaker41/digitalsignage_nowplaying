(function () {

     let keyboard = angular.module("keyboard", []);

     keyboard.controller(
          'keyboardCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
               this.app = $scope.$parent;
               let keyboard = this;

          // populate the keyboard template with character data from external json file.
               $http({
                    method: 'GET',
                    url: 'components/keyboard/keyboard.json'
               }).then(function (response) {
                    keyboard.layout = response.data;
                    console.log(keyboard.layout);
               }, function (error) {
                    console.log("error loading data");
               });

          // this is what happens when you press a button on the keyboard.
               keyboard.keyPressed = function (value, action) {
                    keyboard.someInput = value;
                    $rootScope.$broadcast('keyPressed', keyboard.someInput, action);
               // keyboard.app.list.searchObject = 
                    console.log($rootScope.keyboardSearchObject);
                    keyboard.app.list.searchObject = $rootScope.keyboardSearchObject;
                    console.log(keyboard.app.list);
               }

          // make the keyboard draggable
               // dragElement(document.getElementById("mydiv"));

               // function dragElement(elmnt) {
               //      var pos1 = 0,
               //           pos2 = 0,
               //           pos3 = 0,
               //           pos4 = 0;
               //      if (document.getElementById(elmnt.id + "header")) {
               //           // if present, the header is where you move the DIV from:
               //           document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
               //      } else {
               //           // otherwise, move the DIV from anywhere inside the DIV:
               //           elmnt.onmousedown = dragMouseDown;
               //      }

               //      function dragMouseDown(e) {
               //           e = e || window.event;
               //           e.preventDefault();
               //           // get the mouse cursor position at startup:
               //           pos3 = e.clientX;
               //           pos4 = e.clientY;
               //           document.onmouseup = closeDragElement;
               //           // call a function whenever the cursor moves:
               //           document.onmousemove = elementDrag;
               //      }

               //      function elementDrag(e) {
               //           e = e || window.event;
               //           e.preventDefault();
               //           // calculate the new cursor position:
               //           pos1 = pos3 - e.clientX;
               //           pos2 = pos4 - e.clientY;
               //           pos3 = e.clientX;
               //           pos4 = e.clientY;
               //           // set the element's new position:
               //           elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
               //           elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
               //      }

               //      function closeDragElement() {
               //           // stop moving when mouse button is released:
               //           document.onmouseup = null;
               //           document.onmousemove = null;
               //      }
               // }


          }]);


     keyboard.component("keyboard", {
          controller: "keyboardCtrl",
          controllerAs: "keyboard",
          templateUrl: "components/keyboard/keyboard.html"
     });


     keyboard.directive('myText', ['$rootScope', function ($rootScope) {
          return {
               link: function (scope, element, attrs) {
                    $rootScope.$on('keyPressed', function (e, val, action) {
                         var domElement = element[0];
                         if (document.selection) {
                              domElement.focus();
                              var sel = document.selection.createRange();
                              sel.text = val;
                              domElement.focus();
                         } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                              var startPos = domElement.selectionStart;
                              var endPos = domElement.selectionEnd;
                              var scrollTop = domElement.scrollTop;

                              if (action === 'del') {
                                   if (startPos === endPos) {
                                        domElement.value = domElement.value.substring(0, startPos - 1) + domElement.value.substring(endPos, domElement.value.length);
                                        domElement.focus();
                                        domElement.selectionStart = startPos - 1;
                                        domElement.selectionEnd = startPos - 1;
                                   } else {
                                        domElement.value = domElement.value.substring(0, startPos) + domElement.value.substring(endPos, domElement.value.length);
                                        domElement.focus();
                                        domElement.selectionStart = startPos;
                                        domElement.selectionEnd = startPos;
                                   }

                                   domElement.scrollTop = scrollTop;
                              } else {
                                   domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                                   domElement.focus();
                                   domElement.selectionStart = startPos + val.length;
                                   domElement.selectionEnd = startPos + val.length;
                                   domElement.scrollTop = scrollTop;
                              }
                         } else {
                              domElement.value += val;
                              domElement.focus();
                         }
                         // console.log(domElement.value);
                         $rootScope.keyboardSearchObject = domElement.value;
                    });
               }
          }
     }]);

})();