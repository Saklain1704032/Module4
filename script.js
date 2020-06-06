(function (window) {
  var haha = ["Yaakov", "Jhj", "Jeny", "Jason", "Petesen", "Frank", "Larry", "Paula"];

  for (var i in haha) {
    var firstLetter = haha[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(haha[i]);
    } else {
      hello.speak(haha[i]);
    }
  }
})(window);
