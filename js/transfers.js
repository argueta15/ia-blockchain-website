$(document).ready(function(){
	$(".btnDoTransfer").click(function(evt){
		evt.preventDefault();
		if($("#dialog-form").length > 0){
			$("#dialog-form").remove();
		}
		$("body").append('<div id="dialog-form" title="New tranfer"> '+
			'  <p class="tranfers">All form fields are required.</p> '+ 
			'  <form> '+
			'    <fieldset> '+
			'<div>'+
			'      <label for="count">Mix count</label> '+
			'      <input type="text" name="count" id="count" value="" class="text ui-widget-content ui-corner-all"> '+
			'</div>' +
			'<div>'+
			'      <label for="address">Address to send</label> '+
			'      <input type="text" name="address" id="address" value="" class="text ui-widget-content ui-corner-all"> '+
			'</div>' +
			'<div>'+
			'      <label for="amount">Amount</label> '+
			'      <input type="text" name="amount" id="amount" value="" class="text ui-widget-content ui-corner-all"> '+
			 '</div>' +
			'      <input type="submit" value="Send" > '+
			'    </fieldset> '+
			'  </form> '+
			'</div>'
		);
		$("#dialog-form").dialog({
			autoShow:true,
			modal: true
		});
	});
});