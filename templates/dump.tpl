<div id="dump">{dump}</div>
<script language="javascript">
$(document).ready(function(){
	$("#dump").dialog({
		modal: true,
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
});
</script>
