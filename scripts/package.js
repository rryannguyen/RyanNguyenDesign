$(document).ready(function() {
  var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight;

  $('.random').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);

  });
});