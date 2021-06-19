// TODO: refactor / combine tooltip and help functions. 
// Handle exceed viewport case / Implement tooltips across site

function createHelpMsg(target_items, class_name, msg_div) {
	$(target_items).each(function (i) {
		$("body").append("<div class='" + class_name + "' id='" + class_name + i + "'><p>" + $(msg_div).html() + "</p></div>");
		var my_tooltip = $("#" + class_name + i);

		if ($(this).attr("title") != "" && $(this).attr("title") != "undefined") {

			$(this).removeAttr("title").mouseover(function(){
				my_tooltip.css({opacity:1.0, display:"none"}).fadeIn(400);
			}).mousemove(function(kmouse){
				var border_top = $(window).scrollTop();
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 15;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
				} 
				else{
					left_pos = border_right-my_tooltip.width()-offset;
				}

				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
				} 
				else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
				}

				my_tooltip.css({left:left_pos, top:top_pos});
				}).mouseout(function(){
				my_tooltip.css({left:"-9999px"});
				});

			}
		});
}


function createTooltip(target_items, name) {
	$(target_items).each(function (i) {
		$("body").append("<div class='" + name + "' id='" + name + i + "'><p>" + $(this).attr('title') + "</p></div>");
		var my_tooltip = $("#" + name + i);

		if ($(this).attr("title") != "") { // checks if there is a title

			$(this).removeAttr("title").mouseover(function () {
				my_tooltip.css({ opacity: 1.0, display: "none" }).fadeIn(400);
			}).mousemove(function (kmouse) {
				my_tooltip.css({ left: kmouse.pageX + 15, top: kmouse.pageY + 15 });
			}).mouseout(function () {
				my_tooltip.fadeOut(400);
			});
		}
	});
}