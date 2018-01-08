//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

$(document).ready(function() {
	//changed the button feature to be greyed out and disabled
	$('#button').attr("disabled",true);
	$('#button').css( 'background-color', '#808080');
	$('#button').css( 'border-color', '#808080');
//remove the expansion of the checkbox
$(".dropDownTextArea").eq(0).css("display","none");
$(".dropDownTextArea").eq(1).css("display","none");
$(".dropDownTextArea").eq(2).css("display","none");



});

$("#img1").click(function() {
	var x = document.getElementsByClassName("dropDownTextArea");
    if($(".dropDownTextArea").eq(0).css('display') == 'none') {
        $(".dropDownTextArea").eq(0).css("display","table-row");
    } else {
        $(".dropDownTextArea").eq(0).css("display","none");
    }
});
$("#img2").click(function() {
	var x = document.getElementsByClassName("dropDownTextArea");
    if($(".dropDownTextArea").eq(1).css('display') == 'none') {
        $(".dropDownTextArea").eq(1).css("display","table-row");
    } else {
        $(".dropDownTextArea").eq(1).css("display","none");
    }
});
$("#img3").click(function() {
	var x = document.getElementsByClassName("dropDownTextArea");
    if($(".dropDownTextArea").eq(2).css('display') == 'none') {
        $(".dropDownTextArea").eq(2).css("display","table-row");
    } else {
        $(".dropDownTextArea").eq(2).css("display","none");
    }
});
$("#box1").change(function() {
        if($(this).prop('checked') == true) {
			  $("#myTable tr").eq(1).css("background-color","#365890");
		}
		else{
			 $("#myTable tr").eq(1).css("background-color","#FFFFFF");
		}
});
$("#box2").change(function() {
        if($(this).prop('checked') == true) {
			  $("#myTable tr").eq(3).css("background-color","#365890");
		}
		else{
			 $("#myTable tr").eq(3).css("background-color","#FFFFFF");
		}
});
$("#box3").change(function() {
        if($(this).prop('checked') == true) {
			  $("#myTable tr").eq(5).css("background-color","#365890");
		}
		else{
			 $("#myTable tr").eq(5).css("background-color","#FFFFFF");
		}
});


var boxes = $('.myCheckBox');

boxes.on('change', function() {
	if  ($('#box1').prop('checked') || $('#box2').prop('checked') || $('#box3').prop('checked')) {
	
	$('#button').attr("disabled",false);
	$('#button').css( 'background-color', '#FF8C00');
	$('#button').css( 'border-color', '#FF8C00');

}
else
	{
	$('#button').attr("disabled",true);
	$('#button').css( 'background-color', '#808080');
	$('#button').css( 'border-color', '#808080');
	}
   // $('#button').prop('disabled', !boxes.filter(':checked').length);
})//.trigger('change');


/*if  ($('#box1').prop('checked') && $('#box2').prop('checked')) {
	
	$('#button').attr("disabled",false);
	$('#button').css( 'background-color', '#FF8C00');
	$('#button').css( 'border-color', '#FF8C00');

}
else
	{
	$('#button').attr("disabled",true);
	$('#button').css( 'background-color', '#808080');
	$('#button').css( 'border-color', '#808080');
	}*/

	



