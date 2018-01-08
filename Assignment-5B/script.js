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
function onloadFunc()
{
//changed the button feature to be greyed out and disabled
document.getElementById("button").disabled = true;
document.getElementById("button").style.background='#808080';
document.getElementById("button").style.borderColor = '#808080';
//remove the expansion of the checkbox
 var x = document.getElementsByClassName("dropDownTextArea");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";

//document.getElementsByClassName("dropDownTextArea").style.display = 'none';

}
function expandFunc1()
{

	var x = document.getElementsByClassName("dropDownTextArea");
    if (x[0].style.display == "none") {
        x[0].style.display = "table-row";
    } else {
        x[0].style.display = "none";
    }

}
function expandFunc2()
{
	var x = document.getElementsByClassName("dropDownTextArea");
    if (x[1].style.display == "none") {
        x[1].style.display = "table-row";
    } else {
        x[1].style.display = "none";
    }

}
function expandFunc3()
{
	var x = document.getElementsByClassName("dropDownTextArea");
    if (x[2].style.display == "none") {
        x[2].style.display = "table-row";
    } else {
        x[2].style.display = "none";
    }

}
function checkboxFunc()
{
	 var checkbox1 = document.getElementById('box1');
	 var checkbox2 = document.getElementById('box2');
	 var checkbox3 = document.getElementById('box3');
	 var tbl = document.getElementById("myTable");

    if (checkbox1.checked) 
    {
       
       tbl.rows[1].style.backgroundColor = "#365890";
            
    }
     else
    {
     
        tbl.rows[1].style.backgroundColor = "#FFFFFF";
    }

    if(checkbox2.checked)
    {
    	
       
                tbl.rows[3].style.backgroundColor = "#365890";
    }
     else
    {
    
    tbl.rows[3].style.backgroundColor = "#FFFFFF";
    }

    if(checkbox3.checked)
    {
    	
                tbl.rows[5].style.backgroundColor = "#365890";
    }
    else
    {
    
    tbl.rows[5].style.backgroundColor = "#FFFFFF";
    }

	if(checkbox1.checked || checkbox2.checked || checkbox3.checked)
	{
		document.getElementById("button").disabled = false;
	   button.style.background= '#FF8C00';
       button.style.borderColor = '#FF8C00';
       
	}
	else
	{
		 document.getElementById("button").disabled = true; 
      button.style.background='#808080';
      button.style.borderColor = '#808080';
	}
}

