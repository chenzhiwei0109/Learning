(function(){

    function resize(){
      var baseFontSize = 100//1000=>10rem
      var designWidth = 1000   
      var width = window.innerWidth;
      var rem = (width/designWidth)*baseFontSize;
      document.querySelector('html').style.fontSize = rem + 'px'
    }


  window.onresize = function(){
      resize()
  }

  document.addEventListener('DOMContentLoaded',resize)

}())