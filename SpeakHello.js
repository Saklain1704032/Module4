(function (window) {
  var speak = "Hello";
  var hello = {
    speak: function (name) {
      console.log(speak + " " + name);
    }
  };
  window.hello = hello;
})(window);
