/*
		Created by Kostya Ostapuk
		v 1.0
*/
$(document).ready(function() {

  //Select slots
  var slot1 = $("#slot1"),
    slot2 = $("#slot2"),
    slot3 = $("#slot3");

  //Start position
  var slot1_pos,
    slot2_pos,
    slot3_pos;
  slot1_pos = slot2_pos = slot3_pos = 0;

  //Start speed slots
  var slot1_time,
    slot2_time,
    slot3_time;
  slot1_time = slot2_time = slot3_time = 80;

  var slot1_intrvl,
    slot2_intrvl,
    slot3_intrvl;

  var posArr = [
    0, //number 7
    108, //bigwin
    216, //cherry
    325, //banana
    435, //watermelon
    540, //orange
    651, //plum
    760, //lemon
    866, //bar
  ];
  var toggle = false;

  //Start spin
  $("#start").click(function() {
    var slot1_TO = setTimeout(function() {
      slot1.css("background-image", "url(../img/blur.png)");
      slot1_intrvl = setInterval(function() {
        slot1_pos += 150;
        slot1.css("background-position", "0 " + slot1_pos + "px");
      }, slot1_time);
    }, 600);

    var slot2_TO = setTimeout(function() {
      slot2.css("background-image", "url(../img/blur.png)");
      slot2_intrvl = setInterval(function() {
        slot2_pos += 150;
        slot2.css("background-position", "0 " + slot2_pos + "px");
      }, slot2_time);
    }, 700);

    var slot3_TO = setTimeout(function() {
      slot3.css("background-image", "url(../img/blur.png)");
      slot3_intrvl = setInterval(function() {
        slot3_pos += 150;
        slot3.css("background-position", "0 " + slot3_pos + "px");
      }, slot3_time);
    }, 800);

    //SlideUp Slots
    var slideUp1 = setInterval(function() {
      slot1.addClass("slideUp");
    }, 200);
    var slideUp2 = setInterval(function() {
      slot2.addClass("slideUp");
    }, 400);
    var slideUp3 = setInterval(function() {
      slot3.addClass("slideUp");
    }, 600);
    setTimeout(function() { //Stop SlideUp
      clearInterval(slideUp1, slideUp2, slideUp3);
    }, 610);
    setTimeout(stopRullet, 3000);
  });

  function stopRullet() {
    clearInterval(slot1_intrvl);
    clearInterval(slot2_intrvl);
    clearInterval(slot3_intrvl);


    $(".slot").css("background-image", "url(../img/default.png)");
    slot1_pos = posArr[randomPosition()];
    slot2_pos = posArr[randomPosition()];
    slot3_pos = posArr[randomPosition()];
    slot1.css("background-position", "0 -" + slot1_pos + "px");
    slot2.css("background-position", "0 -" + slot2_pos + "px");
    slot3.css("background-position", "0 -" + slot3_pos + "px");
  }

  function randomPosition() {
    var rand = Math.floor(Math.random() * posArr.length);
    return rand;
  }
});
