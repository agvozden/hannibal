/**
 * Copyright info-g 
 * author: agvozden
 * www.gvozden.info
 */

var url = $("base").data("url");
var url_view = $("base").data("url-view");

$().ready(function() {

	if ($('#boxPersonalize').length) {
		$.ajax( {
			url : url + '?ajax=boxPersonalize',
			success : function(data) {
				$('#boxPersonalize').html(data);
			}
		});
	}

	if ($().colorbox) {
		$(".float-image").colorbox( {
			maxWidth : '100%',
			maxHeight : '100%'
		});
		$(".group1").colorbox({rel:'group1'});
		$(".img-gallery").colorbox({rel:'gallery'});
		$(".youtube").colorbox( {
			iframe : true,
			innerWidth : 800,
			innerHeight : 600
		});

		$(".float-page").colorbox( {
			width : '700',
			height : '80%',
			title : ' ',
			iframe : false,
			scrolling : true,
			href : function() {
				var id = $(this).attr('name');
				var href = encodeURIComponent($(this).attr('href'));
				return url + '?ajax=page&id=' + id + '&url=' + href;
			}
		});
		$(".iframe").colorbox( {
			iframe : true,
			width : "960px",
			height : "80%"
		});
	}
	
	//datepicker
	if ($().datepicker) {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-99Y",
			maxDate: "-18Y",
			yearRange: "-99:-18",
			altField: "#dateholder",
			altFormat: "yy-mm-dd"
		});
		$( ".selector" ).datepicker({ minDate: new Date(2007, 1 - 1, 1) });
	}
	
	//$("abbr.date").timeago();

	$("#per_page").val($("#per_page_holder").val());
	$("#per_page").change(function() {
		$(this).closest('form').submit();
	});
	
	liveEvents();
	
	$(".like").click(function(){
		var location = url+'?ajax=like';
		var elem = $(this);
		$.get(location, {
			item_id : $(this).data("id"),
			item_type:  $(this).data("type"),
			notify : $(this).data("notify"),
			link : $(this).data("link"),
		}, function(data) {
			if (data) {
				//elem.html('+');
				$(".like_no", elem.parent()).html(data);
			}
			elem.css("cursor", "default");
		}, "json" );
		return false;
	});	
		
	$(".ajax").on("click", function(e) {
		var location = $(this).attr('href');
		var parent = $(this).parent();
		$.get(location, {
			param : 'value'
		}, function(data) {
			parent.html(data);
		});
		return false;
	});

	$(".js_confirm").click(function() {
		var conftext = $(this).attr("title");
		if (!conftext)
			conftext = 'Are you sure?';
		cf = confirm(conftext);
		return cf;
	});

	$("a").focus(function() {
		$(this).blur();
	});
	$("a").each(function(index, element) {
		if (window.location.href == $(this).attr('href')) {
			$(this).addClass("active");
			$(this).parent('li').addClass("active");
		}
	});
	$(".submit").click(function(e) {
		var forma = $(this).closest('form');
		if (!checkForm($(forma)))
			return false;
		forma.submit();
	});
	$(".reset").click(function(e) {
		var forma = $(this).closest('form');
		forma.reset();
	});

	$("form").submit(function() {
		return checkForm($(this));
	});
	$(".buy").click(function() {
		forma = $(this).closest('form');
		if (checkForm(forma)) forma.submit();
	});

	//retargExtLinks($('body'));

});// end ready

$(document).ajaxComplete(function() {
	
	liveEvents();

});// end ajaxComplete

function liveEvents(){

	$(".add-fav").off("click").on("click", function(){
		var location = url+'?ajax=favorite';
		var elem = $(this);
		$.get(location, {
			item_id : $(this).data("id"),
			item_type:  $(this).data("type"),
			notify : $(this).data("notify"),
			link: $(this).data("link"),
		}, function(data) {
			if (data) elem.removeClass('add-fav').addClass("rem-fav");
		}, "json" );
		return false;
	});	
	$(".rem-fav").off("click").on("click", function(){
		var location = url+'?ajax=favorite&remove=1';
		var elem = $(this);
		$.get(location, {
			item_id : $(this).data("id"),
			item_type:  $(this).data("type"),
		}, function(data) {
			if (data) elem.removeClass('rem-fav').addClass("add-fav");
		}, "json" );
		return false;
	});	
	
}
/**
 * common libraries
 */
custom_alert = function(message) {
	//$("body").floatbox({msg:message});
	$("<div>" + message + "</div>").dialog( {
		modal : true,
		buttons : {
			Ok : function() {
				$(this).dialog("close");
			}
		}
	});
}

var confirm_delete = function(message) {
	var cf = confirm(message);
	if (cf !== true) {
		return false;
	}
}

var money_format = function(price){
	price = parseFloat(price);
	price = price.toFixed(2);
	return price + ' $$$';
}

function Multiplication(var1, var2){
	return var1 * var2;
}
