var percent = 0;
var sec = 10;

function eatCount() {
  $(".monsterText").html("We are<br>SQUARE<br>MONSTER!");
}

var timer = setInterval(function () {
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent >= 100) {
    $(".pageLoading").addClass("complete");
    setTimeout(eatCount, 3000);
    clearInterval(timer);
  }
}, 30);
