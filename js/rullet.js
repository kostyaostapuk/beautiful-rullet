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
	slot1_pos=slot2_pos=slot3_pos=0;

  //Start speed slots
  var slot1_time,
	 		slot2_time,
			slot3_time;
	slot1_time=slot2_time=slot3_time=200;

  var slot1_intrvl,
			slot2_intrvl,
      slot3_intrvl;

	var posArr=[
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


  //Start spin
  $("#start").click(function() {
    var slot1_TO = setTimeout(function() {
      slot1.css("background-image", "url(../img/blur.png)");
      slot1_intrvl = setInterval(function() {
        slot1_pos += 150;
        slot1.css("background-position", "0 " + slot1_pos + "px");
      }, slot1_time);
    }, 500);

    var slot2_TO = setTimeout(function() {
      slot2.css("background-image", "url(../img/blur.png)");
      slot2_intrvl = setInterval(function() {
        slot2_pos += 150;
        slot2.css("background-position", "0 " + slot2_pos + "px");
      }, slot2_time);
    }, 600);

    var slot3_TO = setTimeout(function() {
      slot3.css("background-image", "url(../img/blur.png)");
      slot3_intrvl = setInterval(function() {
        slot3_pos += 150;
        slot3.css("background-position", "0 " + slot3_pos + "px");
      }, slot3_time);
    }, 700);

		// setTimeout(function(){
		// 	slot1_time = 0;
		// 	slot2_time = 0;
		// 	slot3_time = 0;
		// 	alert(slot1_time);
		// }, 3000);
  });

	// var boost = setInterval(function() {
	// 	slot1_time -= 40;
	// 	slot2_time -= 40;
	// 	slot3_time -= 40;
	// }, 500);
  //
	// setTimeout(function() {
	// 	clearInterval(boost);
	// }, 2000);

	setTimeout(stopRullet, 10000);

  function stopRullet() {
    clearInterval(slot1_intrvl);
    clearInterval(slot2_intrvl);
    clearInterval(slot3_intrvl);
    slot1_pos = 0;
    slot2_pos = 0;
    slot3_pos = 0;
    $(".slot").css("background-position", "0 -" + 50 + "px");
    $(".slot").css("background-image", "url(../img/default.png)");

  }





});
