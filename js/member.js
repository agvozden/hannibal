/**
 * Copyright info-g author: agvozden
 */
$().ready(function() {
	/*
	 * if ($('#boxPersonalize').length) { $.ajax( { url : url +
	 * '?ajax=boxPersonalize', success : function(data) {
	 * $('#boxPersonalize').html(data); } }); }
	 */
	
	$("#signup #email").change(function() {
		$.get("index.php", {
			ajax : 'checkEmailExist',
			id : $(this).val()
		}, function(data, status) {
			results = data.split('|');
			status = results[0];
			message = results[1];
			if (status == 'false') {
				$("#email").data('checkerror', 1).focus();
				custom_alert(message);
			} else {
				$("#email").removeData('checkerror');
			}
		});
	});

	$("#signup #username").change(function() {
		$.get("index.php", {
			ajax : 'checkUserExist',
			id : $(this).val()
		}, function(data, status) {
			results = data.split('|');
			status = results[0];
			message = results[1];
			if (status == 'false') {
				$("#username").data('checkerror', 1).focus();
				custom_alert(message);
			} else {
				$("#username").removeData('checkerror');
			}
		});
	});

	$("#gender_male").click(function() {
		$("#gender").val("male");
		$("#group_id").val("1");
	});
	$("#gender_female").click(function() {
		$("#gender").val("female");
		$("#group_id").val("2");
	});
	
	if ($("#gender_male").data("checked")){
		if ($(this).data("checked")=='male'){
			$("#gender_male").prop('checked', true);
		} else {
			$("#gender_female").prop('checked', true);
		}
	}

	$('#_image_upload').on("change", function(){
		var files = document.getElementById("image_upload").files;
		for (var i=0; i < files.length; i++) {
			var file=files[i];
			sendFile(file, 'profile', $(this), 'imageUploadCallback');
		};		
	});
	$('#_cover_upload').on("change", function(){
		var files = document.getElementById("cover_upload").files;
		for (var i=0; i < files.length; i++) {
			var file=files[i];
			sendFile(file, 'cover', $(this), 'coverUploadCallback');
		};		
	});
	$('#photo_upload').on("change", function(){
		var files = document.getElementById("photo_upload").files;
		//console.log("Number Of Files "+files.length);
		for (var i=0; i < files.length; i++) {
			var file=files[i];
			//console.log("Name: "+file.name+",Size: "+file.size+",Type: "+file.type);
			sendFile(file, 'photo', $(this), 'photoUploadCallback');
		};		
	});

});

var sendFile = function(file, type, elem, _callback) {

	var elem_id = elem.attr("id");
	//elem.parent().append('<img src="' + url + 'images/loading.gif" id="image_upload_progres" />');
	var data = new FormData();
	data.append('attachment', file);
	
	$.ajax({
		url : url + '?ajax=uploader&type='+type+'&fileElementId=attachment',
		data : data,
		cache : false,
		contentType : false,
		processData : false,
		type : 'POST',
		dataType: 'json'
	}).success(function(data, status) {
		$("#image_upload_progres").hide().remove();
		console.log(data.status, status);
		$('#' + elem_id + '_holder').val(data.file);
		//$('#' + elem_id + '_preview').attr('src', url + 'file.php?folder=uploads&file=' + data.file);
		elem.val("");
		eval(_callback)();
	}).error(function(data, status, e) {
		$("#image_upload_progres").hide().remove();
		console.log(data.status + '; ' + status);
		alert(e);
	});

};

function imageUploadCallback(){
	var filename = $("#image_upload_holder").val();
}
function coverUploadCallback(){
	alert($("#cover_upload_holder").val());
}
function photoUploadCallback(){
	var filename = $("#photo_upload_holder").val();
	var category_id = $("#photo_category_select").val();
	$.ajax({
		url : url + '?ajax=photo',
		data: { store: filename, category_id: category_id },
		type : 'POST',
		dataType: 'json'
	}).success(function(data, status) {
		$("#member_photos").append(data.html);
	});
}

