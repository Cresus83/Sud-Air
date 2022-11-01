(function(){
  
  // Defaults
  var BUTTON = document.getElementById('btnpopup');
  var POPUP = document.getElementById('mypopup');
  var POPUP_CLASS = 'popup-ui';
  
  // Popup button (Click on button to open modal)
  BUTTON.addEventListener('click', function(){
    POPUP.className = POPUP_CLASS + ' show';
  }, false);

  // Popup modal (Click on modal to close it)
  POPUP.addEventListener('click', function(){
    this.className = POPUP_CLASS;
  }, false);
  
  
})();